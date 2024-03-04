import React from 'react';
import ReactDOM from 'react-dom/client';
import CountDownTimer from './components/Countdowntimer';
import './index.css';
import StopWatch from './components/Stopwatch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <CountDownTimer/>
      <StopWatch/>
    </div>
  </React.StrictMode>
);
