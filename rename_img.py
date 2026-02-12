import os

src = r"c:\Users\srush\OneDrive\Desktop\resume\assets\images\WhatsApp Image 2026-02-09 at 9.53.26 PM (1).jpeg"
dst = r"c:\Users\srush\OneDrive\Desktop\resume\assets\images\profile.jpg"

if os.path.exists(src):
    try:
        os.rename(src, dst)
        print(f"Successfully renamed to {dst}")
    except Exception as e:
        print(f"Error: {e}")
else:
    print(f"Source file not found: {src}")
