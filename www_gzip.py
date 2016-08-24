#
# Clone files from "www" to "data" folder and gzip
#
from SCons.Script import DefaultEnvironment
from distutils import dir_util
import os
import gzip
import shutil
import re

env = DefaultEnvironment()

# Set parameters from environment variables
data = env['PROJECT_DIR'] + "/data/"
www = env['PROJECT_DIR'] + "/www"
pattern = ARGUMENTS['CUSTOM_OPTION'].decode('base64')

def gzFile (file):
    with open(file, 'rb') as f_in, gzip.open(file + '.gz', 'wb') as f_out:
        shutil.copyfileobj(f_in, f_out)
    os.remove(file)

# Show parameters
print data
print www
print pattern

# Only run this script when building SPIFFS image
if 'SPIFFS_START' in env:
    # clone 'html' folder to 'data' folder
    files = dir_util.copy_tree(www, data, )
    for file in files:
        if re.search(pattern, file):
            print file
            gzFile( file )
