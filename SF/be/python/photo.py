#!/usr/bin/env python
# -*- coding: utf-8 -*-

import numpy as np
import sys
from PIL import Image

import tensorflow as tf
from keras.models import load_model
from IPython.display import display, Image



model = load_model('C:/SprintF/SF/be/python/Image_classify.h5')

data_class_name_e = [
 'apple',
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

img_height = 180
img_width = 180

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