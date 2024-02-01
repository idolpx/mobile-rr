#ifndef GLOBAL_DEFINES_H
#define GLOBAL_DEFINES_H

#include <Arduino.h>

//***************************************************************************
// Global data section.                                                     *
//***************************************************************************
float version               = 1.43;
const char *appid           = "mobile-rr";
char ssid[]                 = "FREE Highspeed WiFi";
int channel                 = 0;
char username[]             = "admin";
char password[]             = "";
bool DEBUG                  = 1;
bool SILENT                 = 0;
int interval                = 30;                                               // 30 Minutes

#define PIEZO_PIN       D2  // GPIO4

// Maximum number of simultaneous clients connected (WebSocket)
#define MAX_WS_CLIENT   3

#define CLIENT_NONE     0
#define CLIENT_ACTIVE   1


#define HELP_TEXT "[[b;green;]ESP8266 Mobile Rick Roll]\n" \
        "------------------------\n" \
        "[[b;cyan;]?] or [[b;cyan;]help]    show this help\n\n" \
        "[[b;cyan;]debug {0/1}]  show/set debug output\n" \
        "[[b;cyan;]silent {0/1}] show/set silent mode\n" \
        "[[b;cyan;]ssid 's']     show/set SSID to 's'\n" \
        "[[b;cyan;]chan {0-11}]  show/set channel (0=auto)\n" \
        "[[b;cyan;]int {n}]      show/set auto scan interval\n" \
        "               where 'n' is mins (0=off)\n" \
        "[[b;cyan;]msg 's']      show/set message to 's'\n" \
        "[[b;cyan;]user 's']     show/set username to 's'\n" \
        "[[b;cyan;]pass 's']     show/set password to 's'\n\n" \
        "[[b;cyan;]beep {n/rr}]  sound piezo for 'n' ms\n" \
        "[[b;cyan;]count]        show Rick Roll count\n" \
        "[[b;cyan;]info]         show system information\n" \
        "[[b;cyan;]json {e/s/i}] show EEPROM, App Settings,\n" \
        "               or System Information\n\n" \
        "[[b;cyan;]ls]           list SPIFFS files\n" \
        "[[b;cyan;]cat 's']      read SPIFFS file 's'\n" \
        "[[b;cyan;]rm 's']       remove SPIFFS file 's'\n\n" \
        "[[b;cyan;]scan]         scan WiFi networks in area\n\n" \
        "[[b;cyan;]reboot]       reboot system\n" \
        "[[b;cyan;]reset]        reset default settings\n" \
        "[[b;cyan;]save]         save settings to EEPROM"


#define LED_PIN         D4      // GPIO2
#define LED_ON          LOW
#define LED_OFF         HIGH
#define LED_TIME        15      // #ms between toggle

static void toggleLED(bool now)
{
    static uint8_t ledTime = 0;

    if (millis() - ledTime > LED_TIME || now)
    {
        digitalWrite(LED_PIN, !digitalRead(LED_PIN));
        ledTime = millis();
    }   
}

static void ledON()
{
    digitalWrite(LED_PIN, LED_ON);
}

static void ledOFF()
{
    digitalWrite(LED_PIN, LED_OFF);
}

// Enable this for verbose logging of IEC and CBM interfaces.
#define IPX_DEBUG

#ifdef IPX_DEBUG
#define debugPrint(...) Serial.print(__VA_ARGS__)
#define debugPrintln(...) Serial.println(__VA_ARGS__)
#define debugPrintf(...) Serial.printf(__VA_ARGS__)
#else
#define debugPrint(...)
#define debugPrintln(...)
#define debugPrintf(...)
#endif

// Select the FileSystem by uncommenting one of the lines below
#define USE_SPIFFS
//#define USE_LITTLEFS
//#define USE_SDFS

// Format storage if a valid file system is not found
#define AUTO_FORMAT true

#if defined USE_SPIFFS
	#define FS_TYPE "SPIFFS"
#elif defined USE_LITTLEFS
	#define FS_TYPE "LITTLEFS"
#elif defined USE_SDFS
	#define FS_TYPE "SDFS"
#endif

#endif // GLOBAL_DEFINES_H