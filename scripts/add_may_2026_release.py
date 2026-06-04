import os
import sys
import django
from docx import Document
from datetime import datetime
from django.core.files import File

# Setup Django environment
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kazrehab.settings')
django.setup()

from landing.models import PressRelease, PressReleaseImage

def run():
    doc_path = os.path.join(os.path.dirname(__file__), '..', 'пресс релиз', 'Пресс релиз для сайта федерации.docx')
    if not os.path.exists(doc_path):
        print(f"File not found: {doc_path}")
        return
        
    doc = Document(doc_path)
    paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
    if not paragraphs:
        print("Document is empty")
        return
        
    title = paragraphs[0]
    if len(title) > 200:
        title = title[:197] + '...'
        
    content = '\n\n'.join(paragraphs)
    date = datetime(2026, 5, 23).date()
    
    # Check if exists
    if PressRelease.objects.filter(title=title).exists():
        print("Press release already exists!")
        pr = PressRelease.objects.filter(title=title).first()
    else:
        pr = PressRelease.objects.create(
            title=title,
            content=content,
            date=date
        )
        print(f"Created press release: {title}")
        
    images_folder = os.path.join(os.path.dirname(__file__), '..', 'images', '23 мая 2026 ')
    if not os.path.exists(images_folder):
        print(f"Images folder not found: {images_folder}")
        return
        
    # Get image files
    image_files = [f for f in os.listdir(images_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
    if not image_files:
        print(f"No images found in {images_folder}")
        return
        
    print(f"Importing {len(image_files)} images for '{pr.title}'")
    
    # Check existing images
    existing_imgs = pr.images.count()
    if existing_imgs > 0:
        print(f"Deleting {existing_imgs} existing images for this release.")
        pr.images.all().delete()
    
    for img_file in image_files:
        img_path = os.path.join(images_folder, img_file)
        try:
            with open(img_path, 'rb') as f:
                pr_img = PressReleaseImage(press_release=pr)
                pr_img.image.save(img_file, File(f))
            print(f"Imported image: {img_file}")
        except Exception as e:
            print(f"Error importing {img_file}: {e}")

if __name__ == '__main__':
    run()
