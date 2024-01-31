import React, { useState } from 'react';

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunksRef = React.useRef([]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        downloadBlob(blob, 'recording.wav'); // WAV 파일로 저장
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);

      setTimeout(() => {
        recorder.stop();
      }, 5000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {recording ? (
        <button disabled>Recording...</button>
      ) : (
        <button onClick={handleStartRecording}>Start Recording</button>
      )}

      {audioURL && (
        <audio src={audioURL} controls>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
