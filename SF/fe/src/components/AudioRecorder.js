import React, { useState } from 'react';
import axios from 'axios';

function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunksRef = React.useRef([]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/mp3' });

        const formData = new FormData();
        formData.append('audioFile', blob, 'recording.wav');

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

  return (
    <div>
      {recording ? (
        <button disabled>Recording...</button>
      ) : (
        <button onClick={handleStartRecording}>Start Recording</button>
      )}
    </div>
  );
}

export default AudioRecorder;