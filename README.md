# ESP8266 Mobile Rick Roll Captive Portal
### Live Chat
[![Gitter](https://badges.gitter.im/idolpx/mobile-rr.svg)](https://gitter.im/idolpx/mobile-rr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

The purpose of this project was to help me get familiar with programming for the ESP8266 and have a bit of fun.

[![ESP8266 Mobile-RR](https://i.ytimg.com/vi/ZpcRZoXQAzM/hqdefault.jpg)](https://www.youtube.com/watch?v=ZpcRZoXQAzM)

* User connects to the device broadcasting an SSID of "FREE Highspeed WiFi" (this is configurable of course)
* The captive portal helper on their phone/table/computer kicks in and presents them with a page showing "Terms of Service" and a button labeled "I Accept"
* When they click the button a full screen animated GIF of Rick Astley dancing appears and an audio clip of "Never Gonna Give You Up" starts playing on loop along with a message in the bottom right letting them know they got rock rolled (Incase they don't understand what's going on)

On bootup, the buzzer plays a little bit of "Never Gonna Give You Up".
To access the console, connect to the ESP8266 Access Point and browse to "http://10.10.10.1/console".
From here you can monitor all connections and see when someone gets Rick Roll'd by the device.
The console also allows you to enter commands to get more info about the status of the device, change the SSID, get the Rick Roll count and even beep the buzzer.

The "debug" setting is on by default and shows you all DNS and HTTP requests made to the device. It's kind of cool to see all the sites that the apps on your phone are trying to access. Check out the screenshots of the console for a glimpse of what it looks like. Some apps are very noisy. You can toggle the "debug" off to not see that stuff.

## Parts List
* ESP8266 Module with 4MB of flash  (I used the WeMos D1 Mini) (http://www.aliexpress.com/snapshot/7833150367.html?orderId=76398745536320)
* Piezo buzzer (http://www.aliexpress.com/snapshot/7762649061.html?orderId=75910217556320)
* USB battery pack with micro-usb cable to power everything

## Wiring
Connect the '+' lead of the piezo to GPIO 4 (D2 on WeMos D1 Mini) and '-' lead to Ground.
I chose GPIO 4 because I installed the long leads with the headers on the WeMos D1 Mini. The spacing from ground was perfect to just plug the buzzer in direct between G & D2.

## Build Firmware
I use PlatformIO to build this.  http://platformio.org/

* Install PlatformIO and let it update itself on first startup
* Once updated and restarted, clone the "mobile-rr" project to a folder and open the project in PlatformIO
* Next build the firmware by clicking the checkmark icon on the toolbar

There is currently an issue with the latest version of a few libraries that this project depends on. To get things to compile you have to enter the following commands into the PlatformIO terminal.

Open the terminal in PlatformIO and enter the following commands.

```
> pio lib uninstall 305 306
> pio lib install 305 --version=5987225cf6
> pio lib install 306 --version=dab3077f2b
```

That will revert those libraries to the previous versions and everything will compile properly.

![Build Firmware](https://s20.postimg.org/e9mna84pp/build_firmware.png)

## Upload Firmware and SPIFFS data
After your firmware build is successful you can upload it by clicking the arrow under the checkmark in the PlatformIO toolbar.

![Upload Firmware](https://s20.postimg.org/ue4gppiot/upload_firmware.png)

You can add/edit the files in the "www" folder to your liking. (Files in the "www" folder will be cloned and gzipped to the "data" folder when building.) Then follow the instructions below to build and upload the SPIFFS file system image to your ESP8266.

![Upload SPIFFS 1](https://s20.postimg.org/p1ymo5v4t/build_spiffs.png)

![Upload SPIFFS 2](https://s20.postimg.org/vrw3l0hy5/image.png)

**Note: Anytime you make changes to the firmware or the data you can rebuild and upload either without the need to install the other again. They reside in different areas of the flash memory.**

## References
I learned everything I needed to create this from these projects

- PlatformIO - http://platformio.org/
-              http://docs.platformio.org/en/latest/platforms/espressif.html#uploading-files-to-file-system-spiffs
- ESP8266 Captive Portal - https://www.hackster.io/rayburne/esp8266-captive-portal-5798ff
- ESP-RADIO - https://github.com/Edzelf/Esp-radio
- ESPAsyncWebServer - https://github.com/me-no-dev/ESPAsyncWebServer
- SOFTAP - Get List of Connected Clients - http://www.esp8266.com/viewtopic.php?f=32&t=5669
- How to print free memory - http://forum.wemos.cc/topic/175/how-to-print-free-memory
- WebSocketToSerial - https://github.com/hallard/WebSocketToSerial.git
- JQueryTerminal - https://github.com/jcubic/jquery.terminal
- OTA Update - http://www.penninkhof.com/2015/12/1610-over-the-air-esp8266-programming-using-platformio/
- Piezo Beep - http://framistats.com/2015/06/07/esp8266-arduino-smtp-server-part-2/
- Simple Audio Board - http://bitcows.com/?p=19
- Tone Doesn't Work - https://www.reddit.com/r/esp8266/comments/46kw38/esp8266_calling_tone_function_does_not_work/
- ArduinoJson - https://github.com/bblanchon/ArduinoJson
- EEPROM - https://gist.github.com/dogrocker/f998dde4dbac923c47c1
- Exception Causes - https://github.com/esp8266/Arduino/blob/master/doc/exception_causes.md
- WiFi Scan- https://www.linuxpinguin.de/project/wifiscanner/
- SPIFFS - https://github.com/esp8266/Arduino/blob/master/doc/filesystem.md
-          http://blog.squix.org/2015/08/esp8266arduino-playing-around-with.html
- WiFiManager - https://github.com/tzapu/WiFiManager
- ESP-GDBStub - https://github.com/esp8266/Arduino/tree/master/libraries/GDBStub


