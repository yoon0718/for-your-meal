#!/usr/bin/env python
# coding: utf-8

import numpy as np
import sys
from PIL import Image

import tensorflow as tf
from keras.models import load_model
from IPython.display import display, Image



model = load_model('C:/SprintF/SF/be/python/Image_classify.h5')

data_class_name_e = ['apple',
 'asparagus',
 'banana',
 'beans',
 'beansprouts',
 'beetroot',
 'broccoli',
 'cabbage',
 'capsicum',
 'carrot',
 'cauliflower',
 'chicken',
 'corn',
 'cucumber',
 'egg',
 'eggplant',
 'ginger',
 'grapes',
 'kiwi',
 'lemon',
 'lettuce',
 'mango',
 'onion',
 'orange',
 'paprika',
 'pineapple',
 'pomegranate',
 'pork',
 'potato',
 'pumpkin',
 'raddish',
 'salmon',
 'spinach',
 'sweetpotato',
 'tofu',
 'tomato',
 'watermelon']
data_class_name = [
    '사과',
    '아스파라거스',
    '바나나',
    '콩',
    '숙주',
    '비트',
    '피망',
    '브로콜리',
    '양배추',
    '고추',
    '당근',
    '콜리플라워',
    '닭',
    '옥수수',
    '오이',
    '달걀',
    '가지',
    '생강',
    '포도',
    '키위',
    '레몬',
    '상추',
    '망고',
    '양파',
    '오렌지',
    '파프리카',
    '파인애플',
    '석류',
    '돼지고기',
    '감자',
    '호박',
    '무',
    '연어',
    '시금치',
    '고구마',
    '두부',
    '토마토',
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
print(data_class_name_e[np.argmax(score)])







