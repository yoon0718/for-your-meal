import librosa
import numpy as np
import pandas as pd
import sys
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from keras.models import load_model

def noise(data):
    noise_amp = 0.035*np.random.uniform()*np.amax(data)
    data = data + noise_amp*np.random.normal(size=data.shape[0])
    return data

def stretch(data):
    return librosa.effects.time_stretch(data, rate=0.8)

def shift(data):
    shift_range = int(np.random.uniform(low=-5, high = 5)*1000)
    return np.roll(data, shift_range)

def pitchs(data, sampling_rate, n_steps):
    return librosa.effects.pitch_shift(y=data, sr=sampling_rate, n_steps=n_steps)

def extract_features(data, sampling_rate):

    result = np.array([])
    mfcc = np.mean(librosa.feature.mfcc(y=data, sr=sampling_rate).T, axis=0)
    result = np.hstack((result, mfcc))
    mel = np.mean(librosa.feature.melspectrogram(y=data, sr=sampling_rate).T, axis=0)
    result = np.hstack((result, mel))
    
    return result


def get_features(path):

    data, sample_rate = librosa.load(path, duration=2.5, offset=0.6)

    res1 = extract_features(data, sample_rate)
    result = np.array(res1)
    noise_data = noise(data)
    res2 = extract_features(noise_data, sample_rate)
    result = np.vstack((result, res2)) # 병렬적으로 추가

    new_data = stretch(data)
    data_stretch_pitch = pitchs(new_data, sample_rate, 0.7)
    res3 = extract_features(data_stretch_pitch, sample_rate)
    result = np.vstack((result, res3)) # 병렬적으로 추가

    return result

X, Y = [], []
feature_path = sys.argv[1]
feature = get_features(feature_path)
for ele in feature:
    X.append(ele)
    
Features = pd.DataFrame(X)
X = Features.values
scaler = StandardScaler()
x = scaler.fit_transform(X)
x = np.expand_dims(x, axis=2)
model = load_model('C:/Users/user/Desktop/tmp/sound_classifier_model_MFCC_MelSpectogram_second.h5')
pred_test = model.predict(x)

y = np.array(['0', '1', '2', '3', '4', '5'])
encoder = OneHotEncoder()
Y = encoder.fit_transform(np.array(y).reshape(-1,1)).toarray()
y_pred = encoder.inverse_transform(pred_test)
df = pd.DataFrame(columns=['Predicted Labels'])
df['Predicted Labels'] = y_pred.flatten()
tmpresult = df['Predicted Labels'][0]
print(tmpresult)