#ifndef CONFIG_FS_H
#define CONFIG_FS_H

#if defined USE_SPIFFS
	#include <FS.h>
	FS* fileSystem = &SPIFFS;
	SPIFFSConfig fileSystemConfig = SPIFFSConfig();
#elif defined USE_LITTLEFS
	#include <LittleFS.h>
	FS* fileSystem = &LittleFS;
	LittleFSConfig fileSystemConfig = LittleFSConfig();	
#elif defined USE_SDFS
	#include <SDFS.h>
	#define CHIP_SELECT_PIN	15
	#define SPI_SETTINGS SPI_FULL_SPEED
	FS* fileSystem = &SDFS;
	SDFSConfig fileSystemConfig = SDFSConfig();	
#else
#error Please select a filesystem first by uncommenting one of the "#define USE_xxx" lines at the beginning of the sketch.
#endif

#endif // CONFIG_FS_H