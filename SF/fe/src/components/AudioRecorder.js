import React, { useState, useEffect } from 'react';
import recbtn from '../img/rec.png';
import './css/VoiceC.css';
import axios from 'axios';

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const chunksRef = React.useRef([]);
  const canvasRef = React.useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const drawWaveform = (audioData) => {
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.moveTo(0, height / 2);

      const bufferLength = audioData.length;
      const sliceWidth = (width * 2.0) / bufferLength;
      let x = 0;

      context.strokeStyle = '#ffff'; // 파동의 색상
      context.lineWidth = 10;

      for (let i = 0; i < bufferLength; i++) {
        const y = (audioData[i] / 128.0) * (height / 2);
        context.lineTo(x, y);
        x += sliceWidth;
      }

      context.lineTo(width, height / 2);
      context.stroke();
    };

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    const visualize = () => {
      requestAnimationFrame(visualize);
      analyser.getByteTimeDomainData(dataArray);
      drawWaveform(dataArray);
    };

    if (recording) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);
          visualize();
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
        });
    }

    return () => {
      cancelAnimationFrame(visualize);
    };
  }, [recording]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
  
      recorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };
  
      recorder.onstop = async () => {
        const mp3Blob = new Blob(chunksRef.current, { type: 'audio/mp3' });
        const wavBlob = await convertToWav(mp3Blob);
        const formData = new FormData();
        formData.append('audioFile', wavBlob);
        try {
          axios.post('http://localhost/recording', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            sessionStorage.setItem("filename",response.data)
            window.location.href = "/loading"
          });
        } catch (error) {
          console.error('Error uploading audio:', error);
        }
        setRecording(false);
      };
  

      recorder.start();      
      setRecording(true);

      setRecording(true);
      setDisplayText('오늘 뭐먹지 라고 말해주세요');
      setTextVisible(true);

      setTimeout(() => {
        recorder.stop();
        setDisplayText('');
        setTextVisible(false);
      }, 5000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  const convertToWav = async (mp3Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const audioBuffer = await audioContext.decodeAudioData(reader.result);
        const wavBuffer = audioBufferToWav(audioBuffer);
        const wavBlob = new Blob([new Uint8Array(wavBuffer)], { type: 'audio/wav' });
        resolve(wavBlob);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(mp3Blob);
    });
  };

  const audioBufferToWav = (buffer) => {
    const numOfChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const bitDepth = 16;
  
    const length = buffer.length * numOfChannels * (bitDepth / 8);
    const wavBuffer = new ArrayBuffer(44 + length);
    const view = new DataView(wavBuffer);
  
    // WAV 헤더 작성
    writeString(view, 0, 'RIFF'); // ChunkID
    view.setUint32(4, 36 + length, true); // ChunkSize
    writeString(view, 8, 'WAVE'); // Format
    writeString(view, 12, 'fmt '); // Subchunk1ID
    view.setUint32(16, 16, true); // Subchunk1Size
    view.setUint16(20, 1, true); // AudioFormat (PCM)
    view.setUint16(22, numOfChannels, true); // NumChannels
    view.setUint32(24, sampleRate, true); // SampleRate
    view.setUint32(28, sampleRate * numOfChannels * (bitDepth / 8), true); // ByteRate
    view.setUint16(32, numOfChannels * (bitDepth / 8), true); // BlockAlign
    view.setUint16(34, bitDepth, true); // BitsPerSample
    writeString(view, 36, 'data'); // Subchunk2ID
    view.setUint32(40, length, true); // Subchunk2Size
  
    // 오디오 데이터 작성
    const dataView = new DataView(wavBuffer, 44);
    const channelData = [];
    for (let channel = 0; channel < numOfChannels; channel++) {
      channelData[channel] = buffer.getChannelData(channel);
    }
    let offset = 0;
    for (let i = 0; i < buffer.length; i++) {
      for (let channel = 0; channel < numOfChannels; channel++) {
        const sample = Math.max(-1, Math.min(1, channelData[channel][i]));
        const sampleValue = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
        dataView.setInt16(offset, sampleValue, true);
        offset += 2;
      }
    }
  
    return wavBuffer;
  };

  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} className="waveform"></canvas>
      <button onClick={handleStartRecording} disabled={recording}>
        <img src={recbtn} className="recbtn" alt="Record" />
      </button>
      <p
        className={`ptag ${textVisible ? 'fade-in' : 'fade-out'}`} // 클래스 이름을 fade, fade-in, fade-out으로 설정
        style={{ transform: textVisible ? 'translateX(0)' : 'translateX(-100px)' }}
      >
        {displayText}
      </p>
    </div>
  );
}
