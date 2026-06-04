import os
import sys
import django
from docx import Document
import re
from datetime import datetime

# Setup Django environment
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kazrehab.settings')
django.setup()

from landing.models import PressRelease

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
    # usually looks like "10-11 ноябрь" or "15 сентябрь"
    day = 1
    # find first number that is not year
    day_matches = re.findall(r'\b(\d{1,2})\b', filename)
    if day_matches:
        day = int(day_matches[0])
        
    try:
        return datetime(year, month, day)
    except:
        return datetime(year, month, 1)

def run():
    folder_path = os.path.join(os.path.dirname(__file__), '..', 'пресс релиз')
    if not os.path.exists(folder_path):
        print(f"Folder not found: {folder_path}")
        return
        
    files = [f for f in os.listdir(folder_path) if f.endswith('.docx') and not f.startswith('~')]
    
    PressRelease.objects.all().delete() # Clear existing for fresh import
    
    for filename in files:
        filepath = os.path.join(folder_path, filename)
        try:
            doc = Document(filepath)
            
            # Extract text
            paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
            if not paragraphs:
                continue
                
            title = paragraphs[0]
            # if title is too long, truncate it
            if len(title) > 200:
                title = title[:197] + '...'
                
            content = '\n\n'.join(paragraphs)
            date = parse_date(filename)
            
            PressRelease.objects.create(
                title=title,
                content=content,
                date=date
            )
            print(f"Imported: {filename}")
        except Exception as e:
            print(f"Failed to import {filename}: {e}")

if __name__ == '__main__':
    run()
