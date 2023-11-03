import subprocess

revision = (
    subprocess.check_output(["date", "+%Y%m%d.%H%M%S"])
    .strip()
    .decode("utf-8")
)
print("-DFW_VERSION='\"%s\"'" % revision)