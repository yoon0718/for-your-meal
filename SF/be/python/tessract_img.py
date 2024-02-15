import matplotlib.pyplot as plt
import sys
import cv2
import pytesseract
from pytesseract import Output
import re

class ExpiryDateExtractor:
    def __init__(self, tesseract_cmd_path):
        pytesseract.pytesseract.tesseract_cmd = tesseract_cmd_path
    
    # 이미지 전처리
    def preprocess_image(self, image):
        image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        return image_gray

    def extract_expiry_date(self, image_path, camera_roi):
        # 이미지 로드
        image = cv2.imread(image_path)

        # 카메라 ROI 내에서 이미지 크롭
        x, y, w, h = camera_roi
        cropped_image = image[y:y+h, x:x+w]
        
        # 이미지에 카메라 ROI에 해당하는 선 그리기
        image_with_roi = cv2.rectangle(image.copy(), (x, y), (x + w, y + h), (0, 255, 0), 2)
        plt.imshow(cv2.cvtColor(image_with_roi, cv2.COLOR_BGR2RGB))
        plt.show()

        # 이미지 전처리
        processed_image = self.preprocess_image(cropped_image)
        
        # 텍스트 추출
        text_data = pytesseract.image_to_data(processed_image, output_type=Output.DICT)
        
        # 추출된 텍스트 중에서 유통기한 추출
        expiry_dates = self.extract_expiry_dates_from_text(text_data)
        return expiry_dates

    def extract_expiry_dates_from_text(self, text_data):
        # 유통기한 추출을 위한 정규표현식 패턴
        date_pattern = r'(\d{2}|\d{4})\d{2}[\./](0[1-9]|1[012])[\./](0[1-9]|[12][0-9]|3[01])'

        # 추출된 텍스트에서 유통기한 검출
        detected_dates = []
        for i in range(len(text_data['text'])):
            if int(float(text_data['conf'][i])) > 60:
                if re.match(date_pattern, text_data['text'][i]):
                    detected_dates.append(text_data['text'][i])

        return detected_dates

# Tesseract 실행 경로 지정
tesseract_cmd_path = r"C:/Tesseract-OCR/tesseract.exe"

# ExpiryDateExtractor 객체 생성
expiry_date_extractor = ExpiryDateExtractor(tesseract_cmd_path)

image_path = sys.argv[1]

# 카메라 ROI 좌표 (예시: x, y, width, height)
camera_roi = (10, 10, 550, 300)

# 유통기한 추출
expiry_dates = expiry_date_extractor.extract_expiry_date(image_path, camera_roi)

# 결과 출력
print(expiry_dates)