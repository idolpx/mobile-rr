#
# Clone files from "www" to "data" folder
# Then compress and embed resources
#
from distutils import dir_util
from shutil import copyfileobj, move, rmtree
import base64, gzip, os, sys, re

try:
    import configparser
except ImportError:
    import ConfigParser as configparser

def gzFile(file):
    with open(file, 'rb') as f_in, gzip.open(file + '.gz', 'wb') as f_out:
        copyfileobj(f_in, f_out)
    os.remove(file)

def read_file(file):
    with open(file, 'r') as myfile:
        content = myfile.read()
    return content.strip()

def read_media(file):
    with open(file, 'rb') as myfile:
        content = base64.b64encode(myfile.read())
    return content

def get_mimetype(file):
    filename, file_extension = os.path.splitext(file)
    return {
        '.gif': 'image/gif',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.svg': 'image/svg+xml',
        '.mp3': 'audio/mp3'
    }[file_extension]

def minify_css(css):
    # remove comments - this will break a lot of hacks :-P
    css = re.sub( '\s*/\*\s*\*/', "$$HACK1$$", css ) # preserve IE<6 comment hack
    css = re.sub( '/\*[\s\S]*?\*/', "", css )
    css = css.replace( "$$HACK1$$", '/**/' ) # preserve IE<6 comment hack

    # url() doesn't need quotes
    css = re.sub( 'url\((["\'])([^)]*)\1\)', 'url(\2)', css )

    # spaces may be safely collapsed as generated content will collapse them anyway
    css = re.sub( '\s+', ' ', css )

    # shorten collapsable colors: #aabbcc to #abc
    css = re.sub( '#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3(\s|;)', '#\1\2\3\4', css )

    # fragment values can loose zeros
    css = re.sub( ':\s*0(\.\d+([cm]m|e[mx]|in|p[ctx]))\s*;', ':\1;', css )

    for rule in re.findall( '([^{]+){([^}]*)}', css ):

        # we don't need spaces around operators
        selectors = [re.sub( '(?<=[\[\(>+=])\s+|\s+(?=[=~^$*|>+\]\)])', '', selector.strip() ) for selector in rule[0].split( ',' )]

        # order is important, but we still want to discard repetitions
        properties = {}
        porder = []
        for prop in re.findall( '(.*?):(.*?)(;|$)', rule[1] ):
            key = prop[0].strip().lower()
            if key not in porder: porder.append( key )
            properties[ key ] = prop[1].strip()

        # output rule if it contains any declarations
#        if properties:
#            print "%s{%s}" % ( ','.join( selectors ), ''.join(['%s:%s;' % (key, properties[key]) for key in porder])[:-1] )

    return css

def embed_css(content):
    pattern = re.compile('<link.*href=[\'"](.*?)[\'"].*/>')

    # Combine CSS
    matches = re.findall(pattern, content)
    css_content = ''
    for match in matches:
        css_content = css_content + '<style>\n' + read_file(data + match) + '\n</style>\n'
        os.remove(data + match)
        print( match )

    if len(css_content.strip()):
        # Remove CSS includes from Content
        content = pattern.sub('', content)

        css_content = minify_css(css_content)
        pattern = re.compile('</head>')
        content = pattern.sub(css_content + '\n</head>', content)

    return content


def combine_js(content):
    # Combine Javascript
    pattern = re.compile('<script.*src=[\'"](.*?)[\'"].*?</script>')
    matches = re.findall(pattern, content)
    js_content = ''
    for match in matches:
        js_content = js_content + read_file(data + match) + '\n'
        os.remove(data + match)
        print( match )

    # Save combined file
    if len(js_content.strip()):
        with open(data + "script.js", 'w') as new_file:
            # Write out new line
            new_file.write( js_content )
        new_file.close()
        if re.search('gz', options):
            gzFile( data + "script.js" )

        # Remove Javascript includes from Content
        content = pattern.sub('', content)

    # Update HTML Content
    if len(js_content.strip()):
        pattern = re.compile('</head>')
        content = pattern.sub('<script src="script.js"></script>\n</head>', content)

    return content

def embed_media(content):
    pattern = re.compile('<(?:img|audio).*src=[\'"](.*?)[\'"].*>')

    # Combine CSS
    matches = re.findall(pattern, content)
    media_content = ''
    for match in matches:
        media_content = read_media(data + match)
        media_content = "data:" + get_mimetype(match) + ";base64," + media_content.decode()
        os.remove(data + match)
        print( match )
        content = re.sub(match, media_content, content)

    return content

# Build httpdocs for web server
def before_buildfs(source, target, env):
    print( "before_buildfs" )

# SPIFFS Stats With Different Combinations of Processing
# Updated: 12.28.2016
# No Processing
#   20 Files, 1.46 MB of 2.81 MB Used
# custom_option = "gz"
#   19 Files, 898.84 KB of 2.81 MB Used
# custom_option =   "gz|css"
#   17 Files, 896.88 KB of 2.81 MB Used
# custom_option = "gz|css|js"
#   13 Files, 893.94 KB of 2.81 MB Used
# custom_option = "gz|css|js|media"
#   8 Files, 898.60 KB of 2.81 MB Used

    # clone 'www' folder to 'data' folder
    files = dir_util.copy_tree(www, data, )

    # embed Javascript, CSS & media into html files
    if re.search('css|js|media', options):
        for file in files:
            if re.search('\.htm', file):
                print(file)
                content = read_file(file)
                if re.search('css', options):
                    content = embed_css( content )
                if re.search('js', options):
                    content = combine_js( content )
                if re.search('media', options):
                    content = embed_media( content )

                # Save New HTML File
                with open(file, 'w') as new_file:
                    new_file.write( content )
                new_file.close()

    # gzip appropriate files
    if re.search(r'gz', options):
        pattern = re.compile('\.htm|\.css|\.js|\.map|\.svg|\.ico')
        for file in files:
            if re.search(pattern, file):
                if os.path.exists(file):
                    print( file )
                    gzFile( file )


# remove 'data' folder after upload
def after_uploadfs(source, target, env):
    print( "after_uploadfs" )
    rmtree(data)

Import("env")
config = configparser.ConfigParser()
config.read("platformio.ini")

options = config.get("extra_config","options")
print( config.sections() )

# Set parameters from environment variables
data = env['PROJECT_DIR'] + "/data/"
www = env['PROJECT_DIR'] + "/www/"

# Show parameters
print( data )
print( www )
print( options )

# Only run when building & uploading SPIFFS image
#env.AddPreAction("buildfs", before_buildfs)
env.AddPreAction("$BUILD_DIR/spiffs.bin", before_buildfs)
env.AddPostAction("uploadfs", after_uploadfs)

#if 'SPIFFS_START' in env:
#   before_buildfs("","buildfs",env)
