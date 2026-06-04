import os
import sys
import django
import re
from datetime import datetime
from django.core.files import File

# Setup Django environment
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kazrehab.settings')
django.setup()

from landing.models import PressRelease, PressReleaseImage

def parse_date(filename):
    months = {
        'январ': 1, 'феврал': 2, 'март': 3, 'апрел': 4, 'май': 5, 'мая': 5,
        'июн': 6, 'июл': 7, 'август': 8, 'сентябр': 9, 'октябр': 10,
        'ноябр': 11, 'декабр': 12
    }
    
    # Extract year
    year_match = re.search(r'(\d{4})', filename)
    year = int(year_match.group(1)) if year_match else 2024
    
    # Extract month
    month = 1
    for m_name, m_num in months.items():
        if m_name in filename.lower():
            month = m_num
            break
            
    # Extract day (if any)
    day = 1
    day_matches = re.findall(r'\b(\d{1,2})\b', filename)
    if day_matches:
        day = int(day_matches[0])
        
    try:
        return datetime(year, month, day).date()
    except:
        return datetime(year, month, 1).date()

def run():
    images_folder = os.path.join(os.path.dirname(__file__), '..', 'images')
    if not os.path.exists(images_folder):
        print(f"Images folder not found: {images_folder}")
        return
        
    # Clear existing images
    PressReleaseImage.objects.all().delete()
    print("Cleared existing images.")
    
    for folder_name in os.listdir(images_folder):
        folder_path = os.path.join(images_folder, folder_name)
        if not os.path.isdir(folder_path):
            continue
            
        date = parse_date(folder_name)
        
        # Find press release by date
        press_releases = PressRelease.objects.filter(date=date)
        if not press_releases.exists():
            print(f"No press release found for date {date} (folder: {folder_name})")
            continue
            
        pr = press_releases.first()
        
        # Get image files
        image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
        if not image_files:
            print(f"No images found in {folder_name}")
            continue
            
        print(f"Importing {len(image_files)} images for '{pr.title}' ({date})")
        
        for img_file in image_files:
            img_path = os.path.join(folder_path, img_file)
            try:
                with open(img_path, 'rb') as f:
                    pr_img = PressReleaseImage(press_release=pr)
                    # This will automatically save the file to MEDIA_ROOT/news_images/
                    pr_img.image.save(img_file, File(f))
            except Exception as e:
                print(f"Error importing {img_file}: {e}")

if __name__ == '__main__':
    run()
