//
// ESP8266 Mobile Rick Roll Captive Portal
// - User connects thinking it is a free WiFi access point
// - After accepting Terms of Service they are Rick Roll'd
//
// References (I learned everything I needed to create this from these projects)
// PlatformIO - http://platformio.org/
//              http://docs.platformio.org/en/latest/platforms/espressif.html#uploading-files-to-file-system-spiffs
// ESP8266 Captive Portal - https://www.hackster.io/rayburne/esp8266-captive-portal-5798ff
// ESP-RADIO - https://github.com/Edzelf/Esp-radio
// ESPAsyncWebServer - https://github.com/me-no-dev/ESPAsyncWebServer
// SOFTAP - Get List of Connected Clients - http://www.esp8266.com/viewtopic.php?f=32&t=5669
// How to print free memory - http://forum.wemos.cc/topic/175/how-to-print-free-memory
// WebSocketToSerial - https://github.com/hallard/WebSocketToSerial.git
// JQueryTerminal - https://github.com/jcubic/jquery.terminal
// OTA Update - http://www.penninkhof.com/2015/12/1610-over-the-air-esp8266-programming-using-platformio/
// Piezo Beep - http://framistats.com/2015/06/07/esp8266-arduino-smtp-server-part-2/
// Simple Audio Board - http://bitcows.com/?p=19
// Tone Doesn't Work - https://www.reddit.com/r/esp8266/comments/46kw38/esp8266_calling_tone_function_does_not_work/
// ArduinoJson - https://github.com/bblanchon/ArduinoJson
// EEPROM - https://gist.github.com/dogrocker/f998dde4dbac923c47c1
// Exception Causes - https://github.com/esp8266/Arduino/blob/master/doc/exception_causes.md
// WiFi Scan- https://www.linuxpinguin.de/project/wifiscanner/
// SPIFFS - https://github.com/esp8266/Arduino/blob/master/doc/filesystem.md
//          http://blog.squix.org/2015/08/esp8266arduino-playing-around-with.html
// WiFiManager - https://github.com/tzapu/WiFiManager
// ESP-GDBStub - https://github.com/esp8266/Arduino/tree/master/libraries/GDBStub
// Offline Debugging - https://blog.squix.org/2016/04/esp8266-offline-debugging-with.html
// Stack Trace Decoder - https://github.com/me-no-dev/EspExceptionDecoder

#include <stdio.h>
#include <string.h>

#include <Arduino.h>
#include <ArduinoOTA.h>
#include <ArduinoJson.h>

#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <EEPROM.h>
#include <Hash.h>
#include <Ticker.h>

#include "global_defines.h"
#include "config_fs.h"
#include "DNSServer.h"

extern "C"
{
#include "user_interface.h"

    void system_set_os_print ( uint8 onoff );
    //void ets_install_putc1 ( void *routine );
}

ADC_MODE ( ADC_VCC );                                                           // Set ADC for Voltage Monitoring

// Use the internal hardware buffer
static void _u0_putc ( char c )
{
    while ( ( ( U0S >> USTXC ) & 0x7F ) == 0x7F ) ;

    U0F = c;
}


//
//******************************************************************************************
// Forward declaration of methods                                                          *
//******************************************************************************************
int setupAP ( int chan_selected );

// Web Socket client state
typedef struct
{
    uint32_t id;
    uint8_t state;
} _ws_client;

enum class statemachine
{
    none,
    beep,
    beep_c,
    beep_rr,
    scan_wifi,
    ap_change,
    read_file
};
statemachine state = statemachine::none;
int state_int;
String state_string;

IPAddress ip ( 10, 10, 10, 1 );                                                 // Private network for httpd
IPAddress mask ( 255, 255, 255, 0 );
DNSServer dnsd;                                                                 // Create the DNS object
MDNSResponder mdns;

AsyncWebServer httpd ( 80 );                                                    // Instance of embedded webserver
//AsyncWebServer  httpsd ( 443 );
AsyncWebSocket ws ( "/ws" );                                                    // access at ws://[esp ip]/ws
_ws_client ws_client[MAX_WS_CLIENT];                                            // State Machine for WebSocket Client;

Ticker timer;                                                                   // Setup Auto Scan Timer

int rrsession;                                                                  // Rick Roll Count Session
int rrtotal;                                                                    // Rick Roll Count Total
char str_vcc[8];
int chan_selected;
uint16_t file_count;

//***************************************************************************
// End of global data section.                                              *
//***************************************************************************

// WiFi Encryption Types
String encryptionTypes ( int which )
{
    switch ( which )
    {
        case ENC_TYPE_WEP:
            return "WEP";
            break;

        case ENC_TYPE_TKIP:
            return "WPA/TKIP";
            break;

        case ENC_TYPE_CCMP:
            return "WPA2/CCMP";
            break;

        case ENC_TYPE_NONE:
            return "None";
            break;

        case ENC_TYPE_AUTO:
            return "Auto";
            break;

        default:
            return "Unknown";
            break;
    }
}

//***************************************************************************
//                            D B G P R I N T                               *
//***************************************************************************
void dbg_printf ( const char *format, ... )
{
    static char sbuf[1400];                                                 // For debug lines
    va_list varArgs;                                                        // For variable number of params

    va_start ( varArgs, format );                                           // Prepare parameters
    vsnprintf ( sbuf, sizeof ( sbuf ), format, varArgs );                   // Format the message
    va_end ( varArgs );                                                     // End of using parameters

    Serial.println ( sbuf );

    if ( DEBUG )                                                            // DEBUG on?
    {
        if ( ws.count() )
            ws.textAll ( sbuf );
    }
}

void printfAll ( const char *format, ... )
{
    if ( ws.count() )
    {
        static char sbuf[1400];
        va_list varArgs;                                                        // For variable number of params

        va_start ( varArgs, format );                                           // Prepare parameters
        vsnprintf ( sbuf, sizeof ( sbuf ), format, varArgs );                   // Format the message
        va_end ( varArgs );                                                     // End of using parameters

        ws.textAll ( sbuf );
    }
}

/** IP to String? */
String ipToString ( IPAddress ip )
{
    String res = "";

    for ( int i = 0; i < 3; i++ )
    {
        res += String ( ( ip >> ( 8 * i ) ) & 0xFF ) + ".";
    }

    res += String ( ( ( ip >> 8 * 3 ) ) & 0xFF );
    return res;
}

//***************************************************************************
//                    F O R M A T  B Y T E S                                *
//***************************************************************************
String formatBytes ( size_t bytes )
{
    if ( bytes < 1024 )
    {
        return String ( bytes ) + " B";
    }
    else if ( bytes < ( 1024 * 1024 ) )
    {
        return String ( bytes / 1024.0 ) + " KB";
    }
    else if ( bytes < ( 1024 * 1024 * 1024 ) )
    {
        return String ( bytes / 1024.0 / 1024.0 ) + " MB";
    }
    else
    {
        return String ( bytes / 1024.0 / 1024.0 / 1024.0 ) + " GB";
    }
}

//***************************************************************************
//                    P I E Z O   B E E P                                   *
//***************************************************************************
void beep ( int delayms )
{
    digitalWrite ( PIEZO_PIN, HIGH );                                       // Turn PIEZO on
    delay ( delayms );                                                      // wait for a delayms ms
    digitalWrite ( PIEZO_PIN, LOW );                                        // Turn PIEZO off
}

void beepC ( int delayms )
{
    for ( int c = 0; c < 448; c++ )
    {
        digitalWrite ( PIEZO_PIN, HIGH );
        delayMicroseconds ( delayms );
        digitalWrite ( PIEZO_PIN, LOW );
        delayMicroseconds ( delayms );
    }

    delay ( 100 );

    for ( int c = 0; c < 224; c++ )
    {
        digitalWrite ( PIEZO_PIN, HIGH );
        delayMicroseconds ( delayms - ( delayms * .1 ) );
        digitalWrite ( PIEZO_PIN, LOW );
        delayMicroseconds ( delayms - ( delayms * .1 ) );
    }
}

void beep_rr ()
{
    // We'll set up an array with the notes we want to play
    // change these values to make different songs!

    // Length must equal the total number of notes and spaces

    const int songLength = 18;

    // Notes is an array of text characters corresponding to the notes
    // in your song. A space represents a rest (no tone)

    char notes[] = "cdfda ag cdfdg gf "; // a space represents a rest

    // Beats is an array values for each note and rest.
    // A "1" represents a quarter-note, 2 a half-note, etc.
    // Don't forget that the rests (spaces) need a length as well.

    int beats[] = {1, 1, 1, 1, 1, 1, 4, 4, 2, 1, 1, 1, 1, 1, 1, 4, 4, 2};

    // The tempo is how fast to play the song.
    // To make the song play faster, decrease this value.

    int tempo = 125;

    //dbg_printf("Tempo %d\n", tempo);

    int i, duration;

    digitalWrite ( LED_BUILTIN, LOW );

    for ( i = 0; i < songLength; i++ ) // step through the song arrays
    {
        duration = beats[i] * tempo; // length of note/rest in ms

        if ( notes[i] == ' ' ) // is this a rest?
        {
            delay ( duration ); // then pause for a moment
        }
        else                  // otherwise, play the note
        {
            analogWriteFreq ( frequency ( notes[i] ) );
            analogWrite ( PIEZO_PIN, 800 );
            delay ( duration );
            analogWrite ( PIEZO_PIN, 0 );
        }

        delay ( tempo / 10 ); // brief pause between notes
    }

    digitalWrite ( LED_BUILTIN, HIGH );
}

int frequency ( char note )
{
    // This function takes a note character (a-g), and returns the
    // corresponding frequency in Hz for the tone() function.

    int i;
    const int numNotes = 8; // number of notes we're storing

    // The following arrays hold the note characters and their
    // corresponding frequencies. The last "C" note is uppercase
    // to separate it from the first lowercase "c". If you want to
    // add more notes, you'll need to use unique characters.

    // For the "char" (character) type, we put single characters
    // in single quotes.

    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int frequencies[] = {262, 294, 330, 349, 392, 440, 494, 523};

    // Now we'll search through the letters in the array, and if
    // we find it, we'll return the frequency for that note.

    for ( i = 0; i < numNotes; i++ ) // Step through the notes
    {
        if ( names[i] == note ) // Is this the one?
        {
            return ( frequencies[i] ); // Yes! Return the frequency
        }
    }

    return ( 0 ); // We looked through everything and didn't find it,
    // but we still need to return a value, so return 0.
}

//***************************************************************************
//                    S E T U P                                             *
//***************************************************************************
void setup ( void )
{
    uint8_t mac[6];
    char mdnsDomain[] = "";

    ets_install_putc1 ( &_u0_putc );
    system_set_os_print ( 1 );
//  system_update_cpu_freq ( 160 );                                             // Set CPU to 80/160 MHz

    Serial.begin ( 921600 );                                                // For debug
    Serial.println();

    pinMode ( LED_BUILTIN, OUTPUT );                                        // initialize onboard LED as output
    digitalWrite ( LED_BUILTIN, HIGH );                                     // Turn the LED off by making the voltage HIGH

    // Startup Banner
    dbg_printf (
        "--------------------\n"
        "ESP8266 Mobile Rick Roll Captive Portal\n"
    );

    // Load EEPROM Settings
    setupEEPROM();

    pinMode ( PIEZO_PIN, OUTPUT );                                          // initialize PIEZO PIN as output

    if ( !SILENT ) beep_rr();

    // Setup Access Point
    wifi_set_phy_mode ( PHY_MODE_11B );
    WiFi.mode ( WIFI_AP );
    WiFi.softAPConfig ( ip, ip, mask );
    chan_selected = setupAP ( channel );
    WiFi.softAP ( ssid, NULL, chan_selected );
    WiFi.softAPmacAddress ( mac );

    // Show Soft AP Info
    dbg_printf (
        "SoftAP MAC: %02X:%02X:%02X:%02X:%02X:%02X\n" \
        "SoftAP IP: %s\n",
        MAC2STR ( mac ),
        ipToString ( ip ).c_str()
    );

    dbg_printf ( "SYSTEM ---" );
    dbg_printf ( "getSdkVersion:      %s", ESP.getSdkVersion() );
    dbg_printf ( "getBootVersion:     %08X", ESP.getBootVersion() );
    dbg_printf ( "getBootMode:        %08X", ESP.getBootMode() );
    dbg_printf ( "getChipId:          %08X", ESP.getChipId() );
    dbg_printf ( "getCpuFreqMHz:      %d Mhz", ESP.getCpuFreqMHz() );
    dbg_printf ( "getCycleCount:      %u\n", ESP.getCycleCount() );

    dbg_printf ( "POWER ---" );
    dbg_printf ( "Voltage:            %d.%d v\n ", ( ESP.getVcc() / 1000 ), ( ESP.getVcc() % 1000 ) );

    dbg_printf ( "MEMORY ---" );
    dbg_printf ( "getFreeHeap:        %d B", ESP.getFreeHeap() );
    dbg_printf ( "getSketchSize:      %s", formatBytes ( ESP.getSketchSize() ).c_str() );
    dbg_printf ( "getFreeSketchSpace: %s", formatBytes ( ESP.getFreeSketchSpace() ).c_str() );
    dbg_printf ( "getFlashChipSize:   %s", formatBytes ( ESP.getFlashChipRealSize() ).c_str() );
    dbg_printf ( "getFlashChipSpeed:  %d MHz\n", int ( ESP.getFlashChipSpeed() / 1000000 ) );

    // Start File System
    setupfileSystem();

    setupDNSServer();

    sprintf ( mdnsDomain, "%s.local", appid );
    dbg_printf ( "Starting mDNS Responder" );

    if ( !mdns.begin ( mdnsDomain, ip ) )
    {
        Serial.println ( ">>>>> Error setting up mDNS responder!" );
    }
    else
    {
        dbg_printf ( ">>>>> mDNS Domain: %s", mdnsDomain );
    }

    setupHTTPServer();
    setupOTAServer();

    // Setup Timer
    if ( interval )
    {
        dbg_printf ( "Starting Auto WiFi Scan Timer" );
        timer.attach_ms ( ( 1000 * 60 * interval ), onTimer );
    }

    // Setup wifi connection callbacks
    wifi_set_event_handler_cb ( wifi_handle_event_cb );

    dbg_printf ( "\nReady!\n--------------------" );
}

int setupAP ( int chan_selected )
{
    struct softap_config config;

    wifi_softap_get_config ( &config ); // Get config first.

    if ( chan_selected == 0 )
    {
        chan_selected = scanWiFi();
    }

    //dbg_printf ( "WiFi \n\tSSID: %s\n\tPassword: %s\n\t Channel: %d", config.ssid, config.password, config.channel );
    //dbg_printf ( "Channel %d Selected!", chan_selected );
    //dbg_printf ( "SSID: %s", ssid );
    //dbg_printf ( "Compare: %d", strcmp ( (char*)config.ssid, ssid ) );

    if ( config.channel != chan_selected || strcmp ( (char*)config.ssid, ssid ) )
    {
        if ( config.channel != chan_selected )
          dbg_printf ( "Changing WiFi channel from %d to %d.", config.channel, chan_selected );

        if ( strcmp ( (char*)config.ssid, ssid ) )
          dbg_printf ( "Changing SSID from '%s' to '%s'.", (char*)config.ssid, ssid );

        WiFi.softAPdisconnect ( true );
        WiFi.mode ( WIFI_AP );
        wifi_set_phy_mode ( PHY_MODE_11B );
        WiFi.softAPConfig ( ip, ip, mask );
        WiFi.softAP ( ssid, NULL, chan_selected );
    }
    else
    {
        dbg_printf ( "No change." );
    }

    return chan_selected;
}


void setupEEPROM()
{
    dbg_printf ( "EEPROM - Checking" );
    EEPROM.begin ( 512 );
    eepromLoad();
    dbg_printf ( "" );
}

void setupfileSystem()
{
    FSInfo fs_info;                                                         // Info about fileSystem
    Dir dir;                                                                // Directory struct for fileSystem
    File f;                                                                 // Filehandle
    String filename;                                                        // Name of file found in fileSystem

    fileSystem->begin();                                                         // Enable file system

    // Show some info about the fileSystem
    file_count = 0;
    fileSystem->info ( fs_info );
    dbg_printf ( "fileSystem Files\nName                           -      Size" );
    dir = fileSystem->openDir ( "/" );                                           // Show files in FS

    while ( dir.next() )                                                    // All files
    {
        f = dir.openFile ( "r" );
        filename = dir.fileName();
        dbg_printf ( "%-30s - %9s",                                     // Show name and size
                     filename.c_str(),
                     formatBytes ( f.size() ).c_str()
                   );
        file_count++;
    }

    dbg_printf ( "%d Files, %s of %s Used",
                 file_count,
                 formatBytes ( fs_info.usedBytes ).c_str(),
                 formatBytes ( fs_info.totalBytes ).c_str()
               );
    dbg_printf ( "%s Free\n",
                 formatBytes ( fs_info.totalBytes - fs_info.usedBytes ).c_str()
               );
}

void setupDNSServer()
{
    // Setup DNS Server
    // if DNS Server is started with "*" for domain name,
    // it will reply with provided IP to all DNS request
    dbg_printf ( "Starting DNS Server" );
    dnsd.onQuery ( [] ( const IPAddress & remoteIP, const char *domain, const IPAddress & resolvedIP )
    {
        dbg_printf ( "DNS Query [%d]: %s -> %s", remoteIP[3], domain, ipToString ( resolvedIP ).c_str() );

        // connectivitycheck.android.com -> 74.125.21.113, 172.217.21.67
        //if ( strstr( "clients1.google.com|clients2.google.com|clients3.google.com|clients4.google.com|clients.l.google.com|connectivitycheck.android.com|connectivitycheck.gstatic.com|android.clients.google.com|play.googleapis.com", domain ) )
        //    dnsd.overrideIP =  IPAddress(172, 217, 21, 67);

        // dns.msftncsi.com -> 131.107.255.255
        //if ( strstr(domain, "msftncsi.com") )
        //    dnsd.overrideIP =  IPAddress(131, 107, 255, 255);

        //if ( strstr( "msftncsi.com|clients1.google.com|clients2.google.com|clients3.google.com|clients4.google.com|clients.l.google.com|connectivitycheck.android.com|connectivitycheck.gstatic.com|android.clients.google.com|play.googleapis.com", domain ) )
        //    dnsd.overrideIP =  IPAddress(ip[0], ip[1], ip[2], ip[3]+10);

    } );
    dnsd.onOverride ( [] ( const IPAddress & remoteIP, const char *domain, const IPAddress & overrideIP )
    {
        dbg_printf ( "DNS Override [%d]: %s -> %s", remoteIP[3], domain, ipToString ( overrideIP ).c_str() );
    } );
    //dnsd.setErrorReplyCode ( DNSReplyCode::NoError );
    dnsd.setTTL(0);
    dnsd.start ( 53, "*", ip );
}

void setupHTTPServer()
{
    // Web Server Document Setup
    dbg_printf ( "Starting HTTP Captive Portal" );

    // Handle requests
    //httpd.on ( "/generate_204", onRequest );  //Android captive portal. Maybe not needed. Might be handled by notFound handler.
    //httpd.on ( "/fwlink", onRequest );  //Microsoft captive portal. Maybe not needed. Might be handled by notFound handler.
    httpd.onNotFound ( onRequest );

    // HTTP basic authentication
    httpd.on ( "/console", HTTP_GET, [] ( AsyncWebServerRequest * request )
    {
        if ( strlen ( username ) > 0 && strlen ( password ) > 0 )
            if ( !request->authenticate ( username, password ) )
                return request->requestAuthentication();

        request->send ( *fileSystem, "/console.htm" );
    } );

    httpd.on ( "/trigger", HTTP_GET, [] ( AsyncWebServerRequest * request )
    {
        rrsession++;
        rrtotal++;
        String remoteIP = ipToString ( request->client()->remoteIP() );
        printfAll ( "[[b;yellow;]Rick Roll Sent!] (%d): [%s] %s" ,
                       rrsession,
                       remoteIP.c_str(),
                       request->header ( "User-Agent" ).c_str()
                     );
        Serial.printf ( "Rick Roll Sent! (%d): [%s] %s\n",
                        rrsession,
                        remoteIP.c_str(),
                        request->header ( "User-Agent" ).c_str()
                      );
        request->send ( 200, "text/html", String ( rrsession ) );
        eepromSave();

        if ( !SILENT )
        {
            state_int = 200;
            state = statemachine::beep_c;
        }

/*        //List all collected headers
        int headers = request->headers();
        int i;

        for ( i = 0; i < headers; i++ )
        {
            AsyncWebHeader *h = request->getHeader ( i );
            Serial.printf ( "HEADER[%s]: %s\n", h->name().c_str(), h->value().c_str() );
        }
*/
        // Disconnect that station
        //wifi_softap_dhcps_client_leave(NULL, remoteIP, true);
    } );

    httpd.on ( "/info", HTTP_GET, [] ( AsyncWebServerRequest * request )
    {
        AsyncWebServerResponse *response = request->beginResponse ( 200, "text/html", getSystemInformation() );
        response->addHeader ( "Access-Control-Allow-Origin", "http://localhost" );
        request->send ( response );
    } );

    httpd.on ( "/settings", HTTP_GET, [] ( AsyncWebServerRequest * request )
    {
        AsyncWebServerResponse *response = request->beginResponse ( 200, "text/html", getApplicationSettings() );
        response->addHeader ( "Access-Control-Allow-Origin", "http://localhost" );
        request->send ( response );
    } );

    // attach AsyncWebSocket
    dbg_printf ( "Starting Websocket Console" );
    ws.onEvent ( onEvent );
    httpd.addHandler ( &ws );
    httpd.begin();
}

void setupOTAServer()
{
    dbg_printf ( "Starting OTA Update Server" );

    // Port defaults to 8266
    // ArduinoOTA.setPort(8266);

    // Hostname defaults to esp8266-[ChipID]
    ArduinoOTA.setHostname ( appid );

    // No authentication by default
    ArduinoOTA.setPassword ( password );

    // OTA callbacks
    ArduinoOTA.onStart ( []()
    {
        fileSystem->end();                                                   // Clean fileSystem

        ws.enable ( false );                                            // Disable client connections
        dbg_printf ( "OTA Update Started" );                            // Let connected clients know what's going on
    } );
    ArduinoOTA.onEnd ( []()
    {
        dbg_printf ( "OTA Update Complete!\n" );

        if ( ws.count() )
        {
            ws.closeAll();                                          // Close connected clients
            delay ( 1000 );
        }
    } );
    ArduinoOTA.onProgress ( [] ( unsigned int progress, unsigned int total )
    {
        dbg_printf ( "Progress: %u%%\r", ( progress / ( total / 100 ) ) );
    } );
    ArduinoOTA.onError ( [] ( ota_error_t error )
    {
        dbg_printf ( "Error[%u]: ", error );

        if ( error == OTA_AUTH_ERROR ) dbg_printf ( "OTA Auth Failed" );
        else if ( error == OTA_BEGIN_ERROR ) dbg_printf ( "OTA Begin Failed" );
        else if ( error == OTA_CONNECT_ERROR ) dbg_printf ( "OTA Connect Failed" );
        else if ( error == OTA_RECEIVE_ERROR ) dbg_printf ( "OTA Receive Failed" );
        else if ( error == OTA_END_ERROR ) dbg_printf ( "OTA End Failed" );
    } );
    ArduinoOTA.begin();
}

int scanWiFi ()
{
    int channels[11];
    std::fill_n ( channels, 11, 0 );

    dbg_printf ( "Scanning WiFi Networks" );

    for ( int count = 1; count < 4; count++ )
    {
        int networks = WiFi.scanNetworks();
        dbg_printf ( "Scan %d, %d Networks Found", count, networks );
        dbg_printf ( "RSSI  CHANNEL  ENCRYPTION  BSSID              SSID" );

        for ( int network = 0; network < networks; network++ )
        {
            String ssid_scan;
            int32_t rssi_scan;
            uint8_t sec_scan;
            uint8_t *BSSID_scan;
            int32_t chan_scan;
            bool hidden_scan;
            WiFi.getNetworkInfo ( network, ssid_scan, sec_scan, rssi_scan, BSSID_scan, chan_scan, hidden_scan );

            // Only count channels with an rssi greater than -80
            if ( rssi_scan > -80 )
            {
                dbg_printf ( "%-6d%-9d%-12s%02X:%02X:%02X:%02X:%02X:%02X  %s",
                             rssi_scan,
                             chan_scan,
                             encryptionTypes ( sec_scan ).c_str(),
                             MAC2STR ( BSSID_scan ),
                             ssid_scan.c_str()
                           );

                channels[ chan_scan ]++;
            }
        }

        WiFi.scanDelete();
    }

    // Find least used channel
    int lowest_count = 10000;

    for ( int channel = 1; channel <= 11; channel++ )
    {
        // Include side channels to account for signal overlap
        int current_count = 0;

        for ( int i = channel - 4; i <= ( channel + 4 ); i++ )
        {
            if ( i > 0 )
                current_count += channels[i];
        }

        if ( current_count < lowest_count )
        {
            lowest_count = current_count;
            chan_selected = channel;
        }

        //Serial.printf( "Channel %d = %d\n", channel, current_count);
    }

    dbg_printf ( "Channel %d is least used.", chan_selected );

    return chan_selected;
}

void readFile ( String file )
{
    File f = fileSystem->open ( file, "r" );

    if ( !f )
    {
        Serial.println ( "file open failed" );
    }
    else
    {
        while ( f.available() )
        {
            String line = f.readStringUntil ( 'n' );

            if ( ws.count() )
                ws.textAll ( line );
        }

        f.close();
    }
}

String getSystemInformation()
{
    String json;
    StaticJsonDocument<512> jsonBuffer;
    JsonObject root = jsonBuffer.as<JsonObject>();

    root["sdk_version"] = ESP.getSdkVersion();
    root["boot_version"] = ESP.getBootVersion();
    root["boot_mode"] = ESP.getBootMode();
    root["chipid"] = ESP.getChipId();
    root["cpu_frequency"] = ESP.getCpuFreqMHz();

    root["cycle_count"] = ESP.getCycleCount();
    root["voltage"] = ( ESP.getVcc() / 1000 );

    root["free_memory"] = ESP.getFreeHeap();
    root["sketch_size"] = ESP.getSketchSize();
    root["sketch_free"] = ESP.getFreeSketchSpace();

    root["flash_size"] = ESP.getFlashChipRealSize();
    root["flash_speed"] = ( ESP.getFlashChipSpeed() / 1000000 );

    FSInfo fs_info;
    fileSystem->info ( fs_info );
    root["fileSystem_size"] = fs_info.totalBytes;
    root["fileSystem_used"] = fs_info.usedBytes;
    root["fileSystem_free"] = ( fs_info.totalBytes - fs_info.usedBytes );

    char apIP[16];
    sprintf ( apIP, "%s", ipToString ( WiFi.softAPIP() ).c_str() );
    root["softap_mac"] = WiFi.softAPmacAddress();
    root["softap_ip"] = apIP;

    char staIP[16];
    sprintf ( staIP, "%s", ipToString ( WiFi.localIP() ).c_str() );
    root["station_mac"] = WiFi.macAddress();
    root["station_ip"] = staIP;

    serializeJson ( root, json);
    return json;
}

String getApplicationSettings()
{
    String json;
    StaticJsonDocument<512> jsonBuffer;
    JsonObject root = jsonBuffer.as<JsonObject>();

    root["version"] = FW_VERSION;
    root["appid"] = appid;
    root["ssid"] = ssid;
    root["channel"] = chan_selected;
    root["interval"] = ( interval );
    root["username"] = username;
    root["password"] = password;
    root["debug"] = DEBUG;
    root["silent"] = SILENT;
    root["rrsession"] = rrsession;
    root["rrtotal"] = rrtotal;

    serializeJson ( root, json);
    return json;
}

void onTimer ()
{
    dbg_printf ( "Auto WiFi scan initiated!" );
    chan_selected = 0;
    state = statemachine::ap_change;
}

void eepromLoad()
{
    String json;
    StaticJsonDocument<512> jsonBuffer;

    int i = 0;

    while ( EEPROM.read ( i ) != 0 )
    {
        json += char ( EEPROM.read ( i ) );
        i++;
    }

    //dbg_printf("EEPROM[%s]", json.c_str());

    deserializeJson(jsonBuffer, json);
    JsonObject root = jsonBuffer.as<JsonObject>();

    // If Parsing failed EEPROM isn't initialized
    if ( root.isNull() )
    {
        eepromInitialize();
        eepromSave();
    }
    else
    {
        // Load Settings from JSON
        sprintf ( ssid, "%s", root["ssid"].as<char*>() );
        channel = root["channel"];
        interval = root["interval"];
        sprintf ( username, "%s", root["username"].as<char*>() );
        sprintf ( password, "%s", root["password"].as<char*>() );

        DEBUG = root["debug"];
        SILENT = root["silent"];
        rrtotal = root["rrtotal"];

        // If the AppID doesn't match then initialize EEPROM
        if ( version != root["version"] )
        {
            dbg_printf ( "EEPROM - Version Changed" );
            eepromInitialize();
            eepromSave();
            dbg_printf ( "EEPROM - Upgraded" );
        }

        dbg_printf ( "EEPROM - Loaded" );
        serializeJsonPretty ( root, Serial);
        Serial.println();
    }
}

void eepromSave()
{
    StaticJsonDocument<512> jsonBuffer;
    JsonObject root = jsonBuffer.as<JsonObject>();

    root["version"] = FW_VERSION;
    root["appid"] = appid;
    root["ssid"] = ssid;
    root["channel"] = channel;
    root["interval"] = interval;
    root["username"] = username;
    root["password"] = password;
    root["debug"] = DEBUG;
    root["silent"] = SILENT;
    root["rrtotal"] = rrtotal;

    char buffer[512];
    serializeJson ( root, buffer, sizeof ( buffer ) );

    int i = 0;

    while ( buffer[i] != 0 )
    {
        EEPROM.write ( i, buffer[i] );
        i++;
    }

    EEPROM.write ( i, buffer[i] );
    EEPROM.commit();

    dbg_printf ( "EEPROM - Saved" );
    serializeJsonPretty ( root, Serial);
    Serial.println();
}

void eepromInitialize()
{
    dbg_printf ( "EEPROM - Initializing" );

    for ( int i = 0; i < 512; ++i )
    {
        EEPROM.write ( i, 0 );
    }

    EEPROM.commit();
}

String getEEPROM()
{
    String json;

    int i = 0;

    while ( EEPROM.read ( i ) != 0 )
    {
        json += char ( EEPROM.read ( i ) );
        i++;
    }

    return json;
}

bool disconnectStationByIP ( IPAddress station_ip )
{
    // Do ARP Query to get MAC address of station_ip
    return true;
}

bool disconnectStationByMAC ( uint8_t *station_mac )
{
    return true;
}

//***************************************************************************
//                    L O O P                                               *
//***************************************************************************
// Main program loop.                                                       *
//***************************************************************************
void loop ( void )
{
    dnsd.processNextRequest();
    ArduinoOTA.handle(); // Handle remote Wifi Updates

    switch ( state )
    {
        case statemachine::beep:
            beep ( state_int );
            break;

        case statemachine::beep_c:
            beepC ( state_int );
            break;

        case statemachine::beep_rr:
            beep_rr();
            break;

        case statemachine::scan_wifi:
            scanWiFi();
            break;

        case statemachine::ap_change:
            chan_selected = setupAP ( chan_selected );
            break;

        case statemachine::read_file:
            readFile ( state_string );
            break;

        default:
            break;
    }

    state = statemachine::none;
    state_int = 0;
    state_string = "";
}

void wifi_handle_event_cb ( System_Event_t *evt )
{
//    printf ( "event %x\n", evt->event );

    switch ( evt->event )
    {
        case EVENT_STAMODE_CONNECTED:
            printf ( "connect to ssid %s, channel %d\n",
                     evt->event_info.connected.ssid,
                     evt->event_info.connected.channel );
            break;

        case EVENT_STAMODE_DISCONNECTED:
            printf ( "disconnect from ssid %s, reason %d\n",
                     evt->event_info.disconnected.ssid,
                     evt->event_info.disconnected.reason );
            break;

        case EVENT_STAMODE_AUTHMODE_CHANGE:
            printf ( "mode: %d -> %d\n",
                     evt->event_info.auth_change.old_mode,
                     evt->event_info.auth_change.new_mode );
            break;

        case EVENT_STAMODE_GOT_IP:
            printf ( "ip: " IPSTR " ,mask: " IPSTR " ,gw: " IPSTR,
                     IP2STR ( &evt->event_info.got_ip.ip ),
                     IP2STR ( &evt->event_info.got_ip.mask ),
                     IP2STR ( &evt->event_info.got_ip.gw )
                   );
            printf ( "\n" );
            break;

        case EVENT_SOFTAPMODE_STACONNECTED:  // 5
            printf ( "station connected: %02X:%02X:%02X:%02X:%02X:%02X, AID = %d\n",
                     MAC2STR ( evt->event_info.sta_connected.mac ),
                     evt->event_info.sta_connected.aid );
            break;

        case EVENT_SOFTAPMODE_STADISCONNECTED:  // 6
            printf ( "station disconnected: %02X:%02X:%02X:%02X:%02X:%02X, AID = %d\n",
                     MAC2STR ( evt->event_info.sta_disconnected.mac ),
                     evt->event_info.sta_disconnected.aid );
            break;

        default:
            break;
    }
}

//***************************************************************************
// HTTPD onRequest                                                          *
//***************************************************************************
void onRequest ( AsyncWebServerRequest *request )
{
    digitalWrite ( LED_BUILTIN, LOW );                                      // Turn the LED on by making the voltage LOW

    IPAddress remoteIP = request->client()->remoteIP();
    dbg_printf (
        "HTTP[%d]: %s%s",
        remoteIP[3],
        request->host().c_str(),
        request->url().c_str()
    );

    //List all collected headers
    int headers = request->headers();
    int i;

    for ( i = 0; i < headers; i++ )
    {
        AsyncWebHeader *h = request->getHeader ( i );
        Serial.printf ( "HEADER[%s]: %s\n", h->name().c_str(), h->value().c_str() );
    }

    String path = request->url();
    char redirect[40];
    sprintf ( redirect, "http://%s/index.htm", ipToString ( ip ).c_str() );

    if ( request->host() == "ctest.cdn.nintendo.net") {
        AsyncWebServerResponse *response = request->beginResponse ( 200, "text/plain", "ok" );
        response->addHeader ( "X-Organization", "Nintendo" );
        request->send ( response );
    }
    else if ( request->host() != "mobile-rr.local" && request->host() != WiFi.softAPIP().toString() ) {
        AsyncWebServerResponse *response = request->beginResponse( 307 );
        response->addHeader ( "X-Frame-Options", "deny" );
        response->addHeader ( "Cache-Control", "no-cache" );
        response->addHeader ( "Pragma", "no-cache" );
        response->addHeader ( "Location", redirect );
        request->send ( response );
    }
    else if ( !file_count )
    {
        request->send_P (200, "text/plain", "fileSystem Missing! (Upload File System Image)" );
    }
    else if ( !fileSystem->exists ( path ) && !fileSystem->exists ( path + ".gz" ) )
    {
        AsyncWebServerResponse *response = request->beginResponse ( 302, "text/plain", "" );
        response->addHeader ( "Location", redirect );
        request->send ( response );
    }
    else
    {
        char s_tmp[] = "";
        AsyncWebServerResponse *response;

        if ( !request->hasParam ( "download" ) && fileSystem->exists ( path + ".gz" ) )
        {
            response = request->beginResponse ( *fileSystem, path, String(), request->hasParam ( "download" ) );
        }
        else
        {
            response = request->beginResponse ( *fileSystem, path );                         // Okay, send the file

        }

        response->addHeader ( "Cache-Control", "no-cache, no-store, must-revalidate" );
        response->addHeader ( "Pragma", "no-cache" );
        response->addHeader ( "Expires", "-1" );
//        response->setContentLength (CONTENT_LENGTH_UNKNOWN);
        sprintf ( s_tmp, "%d", ESP.getFreeHeap() );
        response->addHeader ( "ESP-Memory", s_tmp );
        request->send ( response );
    }

    digitalWrite ( LED_BUILTIN, HIGH );                                     // Turn the LED off by making the voltage HIGH
}


//***************************************************************************
// WebSocket onEvent                                                        *
//***************************************************************************
// Manage routing of websocket events                                       *
//***************************************************************************
void onEvent ( AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len )
{
    if ( type == WS_EVT_CONNECT )
    {
        uint8_t index;
        //dbg_printf ( "ws[%s][%u] connect\n", server->url(), client->id() );

        for ( index = 0; index < MAX_WS_CLIENT; index++ )
        {
            if ( ws_client[index].id == 0 )
            {
                ws_client[index].id = client->id();
                ws_client[index].state = CLIENT_ACTIVE;
                //dbg_printf ( "added #%u at index[%d]\n", client->id(), index );
                client->printf ( "[[b;green;]Hello Client #%u, added you at index %d]", client->id(), index );
                client->ping();
                break; // Exit for loop
            }
        }

        if ( index >= MAX_WS_CLIENT )
        {
            //dbg_printf ( "not added, table is full" );
            client->printf ( "[[b;red;]Sorry client #%u, Max client limit %d reached]", client->id(), MAX_WS_CLIENT );
            client->ping();
        }
    }
    else if ( type == WS_EVT_DISCONNECT )
    {
        //dbg_printf ( "ws[%s][%u] disconnect: %u\n", server->url(), client->id() );

        for ( uint8_t i = 0; i < MAX_WS_CLIENT; i++ )
        {
            if ( ws_client[i].id == client->id() )
            {
                ws_client[i].id = 0;
                ws_client[i].state = CLIENT_NONE;
                //dbg_printf ( "freed[%d]\n", i );
                break; // Exit for loop
            }
        }
    }
    else if ( type == WS_EVT_ERROR )
    {
        dbg_printf ( "WS[%u]: error(%u) - %s", client->id(), * ( ( uint16_t * ) arg ), ( char * ) data );
    }
    else if ( type == WS_EVT_PONG )
    {
        dbg_printf ( "WS[%u]: pong", client->id(), len );
    }
    else if ( type == WS_EVT_DATA )
    {
        //data packet
        AwsFrameInfo *info = ( AwsFrameInfo * ) arg;
        char *msg = NULL;
        size_t n = info->len;
        uint8_t index;

        // Size of buffer needed
        // String same size +1 for \0
        // Hex size*3+1 for \0 (hex displayed as "FF AA BB ...")
        n = info->opcode == WS_TEXT ? n + 1 : n * 3 + 1;
        msg = ( char * ) calloc ( n, sizeof ( char ) );

        if ( msg )
        {
            // Grab all data
            for ( size_t i = 0; i < info->len; i++ )
            {
                if ( info->opcode == WS_TEXT )
                {
                    msg[i] = ( char ) data[i];
                }
                else
                {
                    sprintf_P ( msg + i * 3, PSTR ( "%02x " ), ( uint8_t ) data[i] );
                }
            }
        }

        //dbg_printf ( "ws[%s][%u] message %s\n", server->url(), client->id(), msg );

        // Search if it's a known client
        for ( index = 0; index < MAX_WS_CLIENT; index++ )
        {
            if ( ws_client[index].id == client->id() )
            {
                //dbg_printf ( "known[%d] '%s'\n", index, msg );
                //dbg_printf ( "client #%d info state=%d\n", client->id(), ws_client[index].state );

                // Received text message
                if ( info->opcode == WS_TEXT )
                {
                    execCommand ( client, msg );
                }
                else
                {
                    dbg_printf ( "Binary 0x:%s", msg );
                }

                // Exit for loop
                break;
            } // if known client
        } // for all clients

        // Free up allocated buffer
        if ( msg )
            free ( msg );
    } // EVT_DATA
}

//***************************************************************************
// WebSocket execCommand                                                    *
//***************************************************************************
// translate and execute command                                            *
//***************************************************************************
void execCommand ( AsyncWebSocketClient *client, char *msg )
{
    bool CHANGED = false;
    uint16_t l = strlen ( msg );
    uint8_t index = MAX_WS_CLIENT;

    // Search if we're known client
    if ( client )
    {
        for ( index = 0; index < MAX_WS_CLIENT; index++ )
        {
            // Exit for loop if we are there
            if ( ws_client[index].id == client->id() )
                break;
        } // for all clients
    }
    else
    {
        return;
    }

    // Custom command to talk to device
    if ( !strncasecmp_P ( msg, PSTR ( "debug" ), 5 ) )
    {
        if ( l > 5 )
        {
            int v = atoi ( &msg[6] );

            if ( v > 0 )
            {
                DEBUG = true;
            }
            else
            {
                DEBUG = false;
            }

            CHANGED = true;
        }

        if ( DEBUG )
        {
            client->printf_P ( PSTR ( "[[b;green;]DEBUG output enabled]" ) );
        }
        else
        {
            client->printf_P ( PSTR ( "[[b;yellow;]DEBUG output disabled]" ) );
        }

    }
    else if ( !strncasecmp_P ( msg, PSTR ( "silent" ), 6 ) )
    {
        if ( l > 6 )
        {
            int v = atoi ( &msg[7] );

            if ( v > 0 )
            {
                SILENT = true;
            }
            else
            {
                SILENT = false;
            }

            CHANGED = true;
        }

        if ( SILENT )
        {
            client->printf_P ( PSTR ( "[[b;green;]SILENT mode enabled]" ) );
        }
        else
        {
            client->printf_P ( PSTR ( "[[b;yellow;]SILENT mode disabled]" ) );
        }

    }
    // Dir files on fileSystem system
    // --------------------------
    else if ( !strcasecmp_P ( msg, PSTR ( "ls" ) ) )
    {
        FSInfo fs_info;
        uint16_t cnt = 0;
        String filename;

        client->printf_P ( PSTR ( "[[b;green;]fileSystem Files]\r\nName                           -      Size" ) );
        Dir dir = fileSystem->openDir ( "/" );                               // Show files in FS

        while ( dir.next() )                                            // All files
        {
            cnt++;
            File f = dir.openFile ( "r" );
            filename = dir.fileName();
            client->printf_P ( PSTR ( "%-30s - %9s" ),              // Show name and size
                               filename.c_str(),
                               formatBytes ( f.size() ).c_str()
                             );
            f.close();
        }

        fileSystem->info ( fs_info );
        client->printf_P ( PSTR ( "%d Files, %s of %s Used" ),
                           cnt,
                           formatBytes ( fs_info.usedBytes ).c_str(),
                           formatBytes ( fs_info.totalBytes ).c_str()
                         );
        client->printf_P ( PSTR ( "%s Free" ),
                           formatBytes ( fs_info.totalBytes - fs_info.usedBytes ).c_str()
                         );
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "cat" ), 3 ) )
    {
        if ( !strncasecmp_P ( msg, PSTR ( "cat " ), 4 ) )
        {
            if ( fileSystem->exists ( &msg[4] ) )
            {
                state_string = &msg[4];
                state = statemachine::read_file;
            }
            else
            {
                client->printf_P ( PSTR ( "[[b;red;]cat: %s: No such file or directory]" ), &msg[4] );
            }

        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "rm" ), 2 ) )
    {
        if ( !strncasecmp_P ( msg, PSTR ( "rm " ), 3 ) )
        {
            if ( fileSystem->exists ( &msg[3] ) )
            {
                fileSystem->remove ( &msg[3] );
            }
            else
            {
                client->printf_P ( PSTR ( "[[b;red;]rm: %s: No such file or directory]" ), &msg[3] );
            }

        }
    }
    else if ( !strcasecmp_P ( msg, PSTR ( "info" ) ) )
    {
        uint8_t mac[6];
        WiFi.softAPmacAddress ( mac );
        client->printf_P ( PSTR ( "[[b;green;]SYSTEM INFORMATION]" ) );
        client->printf_P ( PSTR ( "Firmware version [[b;green;]%s %s]\n " ), __DATE__, __TIME__ );

        client->printf_P ( PSTR ( "[[b;cyan;]SYSTEM]" ) );
        client->printf_P ( PSTR ( "SDK version:  %s" ), ESP.getSdkVersion() );
        client->printf_P ( PSTR ( "Boot Version: %08X" ), ESP.getBootVersion() );
        client->printf_P ( PSTR ( "Boot Mode:    %08X" ), ESP.getBootMode() );
        client->printf_P ( PSTR ( "Chip ID:      %08X" ), ESP.getChipId() );
        client->printf_P ( PSTR ( "CPU Freq:     %d MHz" ), ESP.getCpuFreqMHz() );
        client->printf_P ( PSTR ( "Cycle Count:  %u\n " ), ESP.getCycleCount() );

        client->printf_P ( PSTR ( "[[b;cyan;]POWER]" ) );
        client->printf_P ( PSTR ( "Voltage:      %d.%d v\n " ), ( ESP.getVcc() / 1000 ), ( ESP.getVcc() % 1000 ) );

        client->printf_P ( PSTR ( "[[b;cyan;]MEMORY]" ) );
        client->printf_P ( PSTR ( "Free Memory:  %d B" ), ESP.getFreeHeap() );
        client->printf_P ( PSTR ( "Sketch Size:  %s" ), formatBytes ( ESP.getSketchSize() ).c_str() );
        client->printf_P ( PSTR ( "Sketch Free:  %s" ), formatBytes ( ESP.getFreeSketchSpace() ).c_str() );
        client->printf_P ( PSTR ( "Flash Space:  %s" ), formatBytes ( ESP.getFlashChipRealSize() ).c_str() );
        client->printf_P ( PSTR ( "Flash Speed:  %d MHz\n " ), int ( ESP.getFlashChipSpeed() / 1000000 ) );

        client->printf_P ( PSTR ( "[[b;cyan;]NETWORK]" ) );
        client->printf_P ( PSTR ( "SoftAP SSID: %s" ), ssid );
        client->printf_P ( PSTR ( "SoftAP  MAC: %02X:%02X:%02X:%02X:%02X:%02X\nSoftAP   IP: %s\n " ),
                           MAC2STR ( mac ),
                           ipToString ( ip ).c_str()
                         );

        client_status ( client );
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "beep" ), 4 ) )
    {
        if ( strstr ( msg, "rr" ) )
        {
            client->printf_P ( PSTR ( "[[b;green;]NEVER GONNA GIVE YOU UP!]" ) );
            state = statemachine::beep_rr;
        }
        else
        {
            if ( strstr ( msg, "c" ) )
            {
                int v = atoi ( &msg[6] );

                if ( v == 0 ) v = 50;

                client->printf_P ( PSTR ( "[[b;yellow;]CHIRP!] %dms" ), v );
                state_int = v;
                state = statemachine::beep_c;
            }
            else
            {
                int v = atoi ( &msg[5] );

                if ( v == 0 ) v = 50;

                client->printf_P ( PSTR ( "[[b;yellow;]BEEP!] %dms" ), v );
                state_int = v;
                state = statemachine::beep;
            }
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "user" ), 4 ) )
    {
        if ( !strncasecmp_P ( msg, PSTR ( "user " ), 5 ) )
        {
            sprintf ( username, "%s", &msg[5] );
            client->printf_P ( PSTR ( "[[b;yellow;]Changing Username:] %s" ), username );
            CHANGED = true;
        }
        else
        {
            client->printf_P ( PSTR ( "[[b;yellow;]Username:] %s" ), username );
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "pass" ), 4 ) )
    {
        if ( !strncasecmp_P ( msg, PSTR ( "pass " ), 5 ) )
        {
            sprintf ( password, "%s", &msg[5] );
            client->printf_P ( PSTR ( "[[b;yellow;]Changing Password:] %s" ), password );
            CHANGED = true;
        }
        else
        {
            client->printf_P ( PSTR ( "[[b;yellow;]Password:] %s" ), password );
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "ssid" ), 4 ) )
    {
        if ( l == 4 )
        {
            client->printf_P ( PSTR ( "[[b;yellow;]SSID:] %s" ), ssid );
        }
        else
        {
            sprintf ( ssid, "%s", &msg[5] );
            client->printf_P ( PSTR ( "[[b;yellow;]Changing WiFi SSID:] %s" ), ssid );

            if ( !SILENT )
            {
                state_int = 500;
                state = statemachine::beep;
            }

            eepromSave();
            state = statemachine::ap_change;
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "chan" ), 4 ) )
    {
        if ( l == 4 )
        {
            if ( channel == 0 )
            {
                client->printf_P ( PSTR ( "[[b;yellow;]Channel:] AUTO (%d)" ), WiFi.channel() );
            }
            else
            {
                client->printf_P ( PSTR ( "[[b;yellow;]Channel:] %d" ), WiFi.channel() );
            }
        }
        else
        {
            int v = atoi ( &msg[5] );

            if ( v > 0 && v < 12 )
            {
                client->printf_P ( PSTR ( "[[b;yellow;]Changing WiFi Channel:] %d" ), v );
            }
            else
            {
                v = 0;
                client->printf_P ( PSTR ( "[[b;yellow;]Changing WiFi Channel:] AUTO" ) );
            }

            if ( !SILENT )
            {
                state_int = 500;
                state = statemachine::beep;
            }

            channel = v;
            chan_selected = v;
            state = statemachine::ap_change;

            CHANGED = true;
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "scan" ), 4 ) )
    {
        client->printf_P ( PSTR ( "[[b;yellow;]WiFi scan initiated!]" ) );
        state = statemachine::scan_wifi;
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "int" ), 3 ) )
    {
        if ( l > 3 )
        {
            int v = atoi ( &msg[4] );

            if ( v < 1 )
            {
                v = 0;
                timer.detach();
            }
            else
            {
                v = v;
                timer.detach();
                timer.attach_ms ( 1000 * 60 * v, onTimer );
                client->printf_P ( PSTR ( "[[b;yellow;]Auto Scan:] ENABLED" ) );
            }

            if ( !SILENT )
            {
                state_int = 500;
                state = statemachine::beep;
            }

            interval = v;

            CHANGED = true;
        }

        if ( interval == 0 )
        {
            client->printf_P ( PSTR ( "[[b;yellow;]Auto Scan:] DISABLED" ) );
        }
        else
        {
            client->printf_P ( PSTR ( "[[b;yellow;]Auto Scan Interval:] %d min(s)" ), interval );
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "save" ), 4 ) )
    {
        client->printf_P ( PSTR ( "[[b;green;]Saving Settings to EEPROM]" ) );

        if ( !SILENT )
        {
            state_int = 500;
            state = statemachine::beep;
        }

        eepromSave();
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "msg" ), 3 ) )
    {
        File f;

        // Open "message.htm" file stream from fileSystem
        if ( fileSystem->exists ( "/message.htm" ) )
        {
            //Serial.println ( "File opened r+" );
            f = fileSystem->open ( "/message.htm", "r+" );
        }
        else
        {
            //Serial.println ( "File opened w+" );
            f = fileSystem->open ( "/message.htm", "w+" );
        }

        if ( !f )
        {
            client->printf_P ( PSTR ( "[[b;red;]File open failed:] /message.htm" ) );
        }
        else
        {
            if ( l == 3 )
            {
                client->printf_P ( PSTR ( "[[b;yellow;]Reading:] /message.htm" ) );
                state_string = "/message.htm";
                state = statemachine::read_file;
            }
            else
            {
                Serial.printf ( "Writing File: [%s]", &msg[4] );
                client->printf_P ( PSTR ( "[[b;yellow;]Changing Message:] %s" ), &msg[4] );

                if ( !SILENT )
                {
                    state_int = 500;
                    state = statemachine::beep;
                }

                // Write Message to "message.htm" in fileSystem
                f.print ( &msg[4] );
            }

            f.close();
        }
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "count" ), 5 ) )
    {
        if ( l > 5 )
        {
            int v = atoi ( &msg[6] );

            if ( v >= 0 )
            {
                rrsession = v;
                rrtotal = v;

                if ( !SILENT )
                {
                    state_int = 500;
                    state = statemachine::beep;
                }

                eepromSave();
            }
        }

        client->printf_P ( PSTR ( "[[b;yellow;]Rick Roll Count]: %d Session, %d Total" ), rrsession, rrtotal );
    }
    else if ( !strncasecmp_P ( msg, PSTR ( "json" ), 4 ) )
    {
        if ( l > 4 )
        {
            String json;

            if ( !strncasecmp_P ( &msg[5], PSTR ( "e" ), 1 ) )
            {
                // EEPROM
                json = getEEPROM();
            }
            else if ( !strncasecmp_P ( &msg[5], PSTR ( "s" ), 1 ) )
            {
                // Settings
                json = getApplicationSettings();
            }
            else if ( !strncasecmp_P ( &msg[5], PSTR ( "i" ), 1 ) )
            {
                // information
                json = getSystemInformation();
            }

            client->printf_P ( json.c_str() );
        }
    }
    else if ( !strcasecmp_P ( msg, PSTR ( "reset" ) ) )
    {
        client->printf_P ( PSTR ( "Resetting EEPROM to defaults" ) );
        eepromInitialize();
        ESP.restart();
    }
    else if ( ( *msg == '?' || !strcasecmp_P ( msg, PSTR ( "help" ) ) ) )
    {
        client->printf_P ( PSTR ( HELP_TEXT ) );
    }
    else if ( !strcasecmp_P ( msg, PSTR ( "reboot" ) ) )
    {
        ws.closeAll();
        delay ( 1000 );
        ESP.restart();
    }

    if ( CHANGED )
    {
        client->printf_P ( PSTR ( "[[b;yellow;]*** NOTE: Changes are not written to EEPROM until you enter 'save']" ) );
    }

    dbg_printf ( "WS[%d]: %s", client->id(), msg );
}

void client_status ( AsyncWebSocketClient *client )
{
    struct station_info *station = wifi_softap_get_station_info();
    uint8_t client_count = wifi_softap_get_station_num();
    struct ip4_addr *ip;
    client->printf_P ( PSTR ( "[[b;yellow;]Connected Client(s)]: %d" ),
                       client_count
                     );
    int i = 0;

    while ( station != NULL )
    {
        ip = &station->ip;
        client->printf_P ( PSTR ( "%d: MAC: %02X:%02X:%02X:%02X:%02X:%02X\n    IP: %s" ),
                           i,
                           MAC2STR ( station->bssid ),
                           ipToString ( ip->addr ).c_str()
                         );
        i++;
        station = STAILQ_NEXT ( station, next );
    }

    wifi_softap_free_station_info();
}
