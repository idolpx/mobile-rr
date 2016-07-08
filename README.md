# ESP8266 Mobile Rick Roll Captive Portal
- User connects thinking it is a free WiFi access point
- After accepting Terms of Service they are Rick Roll'd

To access the console, connect to the ESP8266 Access Point and browse to "http://10.10.10.1/console".
From here you can monitor all connections and see when someone gets Rick Roll'd by the device.

The purpose of this project was to help me get familiar with programming for the ESP8266.
I learned a lot from other projects to get this working the way I had envisioned.

References (I learned everything I needed to create this from these projects)
PlatformIO - http://platformio.org/
             http://docs.platformio.org/en/latest/platforms/espressif.html#uploading-files-to-file-system-spiffs
ESP8266 Captive Portal - https://www.hackster.io/rayburne/esp8266-captive-portal-5798ff
ESP-RADIO - https://github.com/Edzelf/Esp-radio
ESPAsyncWebServer - https://github.com/me-no-dev/ESPAsyncWebServer
SOFTAP - Get List of Connected Clients - http://www.esp8266.com/viewtopic.php?f=32&t=5669
How to print free memory - http://forum.wemos.cc/topic/175/how-to-print-free-memory
WebSocketToSerial - https://github.com/hallard/WebSocketToSerial.git
JQueryTerminal - https://github.com/jcubic/jquery.terminal
OTA Update - http://www.penninkhof.com/2015/12/1610-over-the-air-esp8266-programming-using-platformio/
Piezo Beep - http://framistats.com/2015/06/07/esp8266-arduino-smtp-server-part-2/
Simple Audio Board - http://bitcows.com/?p=19
Tone Doesn't Work - https://www.reddit.com/r/esp8266/comments/46kw38/esp8266_calling_tone_function_does_not_work/

I still need to make a video to demo this project and I want to add a few more features.
It is fully functional now though. Let me know what you think.
