import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.image import ImageDataGenerator


# train, val, tset dataset load
train_data = 'copy/Fruits_Vegetables/train'
val_data = 'copy/Fruits_Vegetables/validation'
test_data = 'copy/Fruits_Vegetables/test'

# img size
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


# 데이터셋 클래스 이름 확인 (데이터 셋에 따라 다르다)
data_class_name = train_ds.class_names


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


# 모델 생성
# RGB 채널 값 = [0, 255] 범위 -> 신경망에 이상적이지 않다. 일반적으로 입력 값을 작게 만든다
# tf.keras.layers.Rescaling : [0, 1] 범위로 데이터 표준화
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
    layers.BatchNormalization(),
    layers.Dense(256, activation='relu'),
    layers.BatchNormalization(),
    layers.Dense(len(data_class_name), activation='softmax')
])


model.compile(
    optimizer='adam', 
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True), 
    metrics=['accuracy']
)


# 모델 훈련
epochs_size = 150
history = model.fit(train_ds, validation_data=val_ds, epochs=epochs_size)


# 훈련결과 그래프로 확인
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


# 모델 평가
model.evaluate(test_ds)


# 모델 테스트
image = 'banana2.jpg'
image = tf.keras.utils.load_img(image, target_size=(img_height,img_width))
img_arr = tf.keras.utils.array_to_img(image)
img_bat=tf.expand_dims(img_arr,0)

predict = model.predict(img_bat)
score = tf.nn.softmax(predict)
print('Veg/Fruit in image is {} with accuracy of {:0.2f}'.format(data_class_name[np.argmax(score)],np.max(score)*100))


# 모델 저장
model.save('Image_classify_1.keras')
model.save('Image_classify_1.h5')


