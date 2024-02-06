import React, { useState } from 'react';

export default function Headers() {
  const [timer, setTimer] = useState('00:00');

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    setTimer(`${hours}:${minutes}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return <div className="timer">{timer}</div>;
}
