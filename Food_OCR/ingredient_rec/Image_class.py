#!/usr/bin/env python
# coding: utf-8

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# 실행 전 캐시 삭제
import gc
gc.collect()

# 사용할 GPU 번호 지정
os.environ["CUDA_VISIBLE_DEVICES"] = "1"  


# train, val, tset 데이터 셋 불러오기
train_data = 'copy/Fruits_Vegetables_plus/train'
val_data = 'copy/Fruits_Vegetables_plus/validation'
test_data = 'copy/Fruits_Vegetables_plus/test'

# 이미지 사이즈 지정
img_width = 180
img_height =180 

# 고급 Keras 사전 처리 유틸리티 : tf.keras.utils.image_dataset_from_directory
# https://www.tensorflow.org/tutorials/load_data/images?hl=ko
# train dataset
train_ds = tf.keras.utils.image_dataset_from_directory(
    train_data,
    shuffle=True,
    image_size=(img_width, img_height),
    batch_size=32,
    validation_split=False
)


# 데이터셋 클래스 이름 확인
data_class_name = train_ds.class_names
data_class_name

# validation dataset
val_ds = tf.keras.utils.image_dataset_from_directory(
    val_data,                                                     
    image_size=(img_height,img_width),                                                  
    batch_size=32,                                                      
    shuffle=False,                                                    
    validation_split=False
)


# test dataset
test_ds = tf.keras.utils.image_dataset_from_directory(
    test_data,
    image_size=(img_height,img_width),
    shuffle=False,
    batch_size=32,
    validation_split=False
)


# 데이터 셋 이미지 확인
plt.figure(figsize=(10,10))
for image, labels in train_ds.take(1):
    for i in range(9):
        plt.subplot(3,3,i+1)
        plt.imshow(image[i].numpy().astype('uint8'))
        plt.title(data_class_name[labels[i]])
        plt.axis('off')
train_ds


# 모델 정의
# RGB 채널 값 = [0, 255] 범위 -> 신경망에 이상적이지 않다. 일반적으로 입력 값을 작게 만든다
# tf.keras.layers.Rescaling : [0,255] -> [0, 1] 범위로 데이터 정규화
model = Sequential([
    layers.Rescaling(1./255),
    layers.Conv2D(32, 3, padding='same', activation='relu'),  
    layers.BatchNormalization(),
    layers.MaxPooling2D(),
    layers.Conv2D(64, 3, padding='same', activation='relu'),
    layers.BatchNormalization(),
    layers.MaxPooling2D(),
    layers.Conv2D(128, 3, padding='same', activation='relu'),
    layers.BatchNormalization(),
    layers.MaxPooling2D(),                                
    layers.Flatten(),
    layers.Dropout(0.5),
    layers.Dense(1024, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.4),
    layers.Dense(512, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.3),
    layers.Dense(256, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.2),
    layers.Dense(len(data_class_name), activation='softmax')
])

# 모델 컴파일
# tf.keras.losses.SparseCategoricalCrossentropy : 레이블을 정수 형태로 된 클래스 인덱스로 표현
# from_logits=True : SparseCategoricalCrossentropy 손실 함수는 모델의 출력이 확률 분포로 변환되기 전에 logits로 주어진다고 지정
model.compile(
    optimizer='adam', 
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True), 
    metrics=['accuracy']
)

model.summary()

# 가장 좋은 loss, val model 저장
checkpoint_cb = tf.keras.callbacks.ModelCheckpoint(f'./check_model.h5',save_best_only=True)

# 모델 학습
epochs_size = 200
history = model.fit(train_ds, validation_data=val_ds, epochs=epochs_size, callbacks=[checkpoint_cb])


# 그래프로 결과 확인
epochs_range = range(epochs_size)
plt.figure(figsize=(8,8))

# 정확도 그래프
plt.subplot(1,2,1)
plt.plot(epochs_range, history.history['accuracy'], label='Training Accuracy', color='blue')
plt.plot(epochs_range, history.history['val_accuracy'], label='Validation Accuracy', color='orange')
plt.title('Accuracy')
plt.legend()  # 범례 추가

# 손실 그래프
plt.subplot(1,2,2)
plt.plot(epochs_range, history.history['loss'], label='Training Loss', color='green')
plt.plot(epochs_range, history.history['val_loss'], label='Validation Loss', color='red')
plt.title('Loss')
plt.legend()  # 범례 추가

plt.show()


# 모델 테스트 (1)
model.evaluate(test_ds)


# 모델 테스트 (2)
image = 'Apple.jpg'
image = tf.keras.utils.load_img(image, target_size=(img_height,img_width))
img_arr = tf.keras.utils.array_to_img(image)
img_bat=tf.expand_dims(img_arr,0)

predict = model.predict(img_bat)
score = tf.nn.softmax(predict)

print('Veg/Fruit in image is {} with accuracy of {:0.2f}'.format(data_class_name[np.argmax(score)],np.max(score)*100))


# 모델 저장
model.save('Image_classify_3.h5')



