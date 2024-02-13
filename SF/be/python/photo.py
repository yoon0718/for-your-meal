#!/usr/bin/env python
# coding: utf-8

import numpy as np
import sys
from PIL import Image

import tensorflow as tf
from keras.models import load_model
from IPython.display import display, Image



model = load_model('C:/SprintF/SF/be/python/Image_classify.h5')


data_class_name = [
    '사과',
    '바나나',
    '비트',
    '피망',
    '양배추',
    '피망',
    '당근',
    '콜리플라워',
    '고추',
    '옥수수',
    '오이',
    '가지',
    '마늘',
    '생강',
    '포도',
    '할라피뇨',
    '키위',
    '레몬',
    '상추',
    '망고',
    '양파',
    '오렌지',
    '파프리카',
    '배',
    '완두콩',
    '파인애플',
    '석류',
    '감자',
    '무',
    '콩',
    '시금치',
    '옥수수',
    '고구마',
    '토마토',
    '순무',
    '수박'
]


img_height = 180
img_width = 180

# image = input('Enter Image name: ')
image_path = sys.argv[1]

display(Image(filename=image_path, width=200))

# Load the image for prediction
image_load = tf.keras.utils.load_img(image_path, target_size=(img_height, img_width))
img_arr = tf.keras.utils.img_to_array(image_load)
img_bat = tf.expand_dims(img_arr, 0)

# Make a prediction
predict = model.predict(img_bat)
score = tf.nn.softmax(predict)

# Display the result
print(data_class_name[np.argmax(score)])







