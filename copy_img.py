import os
import shutil

src = r"assets\images\WhatsApp Image 2026-02-09 at 9.53.26 PM (1).jpeg"
dst = r"public\profile.jpg"

print(f"Checking if {src} exists: {os.path.exists(src)}")
if os.path.exists(src):
    try:
        shutil.copy2(src, dst)
        print(f"Successfully copied to {dst}")
        print(f"Verifying {dst} exists: {os.path.exists(dst)}")
    except Exception as e:
        print(f"Error copying: {e}")
else:
    # List files in assets/images just in case
    print(f"Files in assets/images: {os.listdir('assets/images')}")
