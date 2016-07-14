# ESP8266 Mobile Rick Roll Captive Portal
The purpose of this project was to help me get familiar with programming for the ESP8266 and have a bit of fun.

* User connects to the device broadcasting an SSID of "FREE Highspeed WiFi" (this is configurable of course)
* The captive portal helper on their phone/table/computer kicks in and presents them with a page showing "Terms of Service" and a button labeled "I Accept"
* When they click the button a full screen animated GIF of Rick Astley dancing appears and an audio clip of "Never Gonna Give You Up" starts playing on loop along with a message in the bottom right letting them know they got rock rolled (Incase they don't understand what's going on)

On bootup, the buzzer plays a little bit of "Never Gonna Give You Up".
To access the console, connect to the ESP8266 Access Point and browse to "http://10.10.10.1/console".
From here you can monitor all connections and see when someone gets Rick Roll'd by the device.
The console also allows you to enter commands to get more info about the status of the device, change the SSID and even beep the buzzer.

## Build Firmware
I use PlatformIO to build this.  http://platformio.org/

* Install that and let it update itself on first startup
* Once updated and restarted, add the ESPAsyncTCP & ESPAsyncWebServer libraries by opening a terminal and entering "pio lib install 306"
* Next clone the "mobile-rr" project to a folder and open the project in PlatformIO
* Then build it by clicking the checkmark icon on the toolbar

![Build Firmware](https://s20.postimg.org/e9mna84pp/build_firmware.png)

## Upload Firmware and SPIFFS data
After your firmware build is successful you can upload it by clicking the arrow under the checkmark in the PlatformIO toolbar.

![Upload Firmware](https://s20.postimg.org/ue4gppiot/upload_firmware.png)

You can edit the files in the "data" folder and follow the instructions in the following images to build and upload the SPIFFS file system image to your ESP8266.

![Upload SPIFFS 1](https://s20.postimg.org/6kl7kreu5/image.png)

![Upload SPIFFS 2](https://s20.postimg.org/vrw3l0hy5/image.png)

## Parts List
* ESP-8266 Module with 4MB of flash  (I used the WeMos D1 Mini) (http://www.aliexpress.com/snapshot/7833150367.html?orderId=76398745536320)
* Piezo buzzer (http://www.aliexpress.com/snapshot/7762649061.html?orderId=75910217556320)
* USB battery pack with micro-usb cable to power everything

## Wiring
Connect the '+' lead of the piezo to GPIO 4 (D2 on WeMos D1 Mini) and '-' lead to Ground. 
I chose GPIO 4 because I installed the long leads with the headers on the WeMos D1 Mini. The spacing from ground was perfect to just plug the buzzer in direct between G & D2.

## References
I learned everything I needed to create this from these projects

- PlatformIO - http://platformio.org/ <br>
             http://docs.platformio.org/en/latest/platforms/espressif.html#uploading-files-to-file-system-spiffs
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

I still need to make a video to demo this project and I want to add a few more features.
It is fully functional now though. Let me know what you think.
