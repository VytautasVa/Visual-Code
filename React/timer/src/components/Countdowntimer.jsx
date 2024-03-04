import React, { useState ,useEffect } from "react";
import Timer from "./Timer";

document.body.style.background = "#282c50"

export default function CountDownTimer(){
    const[hours, setHours] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(0);
    const[miliseconds, setMiliseconds] = useState(0);
    const[isRunning, setIsRunning] = useState(null);

    const[showEndScrean, setShowEndScrean] = useState({
        show: false,
        message: "🚀"
    });

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval = setInterval (()=>{
                if(miliseconds > 0){
                    setMiliseconds((miliseconds) => miliseconds -1);
                }else if (seconds > 0){
                    setSeconds((seconds) => seconds -1);
                    setMiliseconds(99);
                }else if (minutes > 0){
                    setMinutes((minutes) => minutes -1);
                    setSeconds(59);
                    setMiliseconds(99);
                }else if (hours > 0){
                    setHours((hours) => hours -1);
                    setMinutes(59);
                    setSeconds(59);
                    setMiliseconds(99);
                }
            }, 10);
        }
        if(hours === 0 && minutes === 0 && seconds === 0 && miliseconds === 1){
            setShowEndScrean({...showEndScrean, show: true});
            resetTimer();
        }

        return () => clearInterval(interval);
    },[miliseconds, seconds, minutes, hours, isRunning, showEndScrean.show]);

    function startTimer(){
        if(hours !== 0 || minutes !== 0 || seconds !== 0 || miliseconds !== 0){
            setIsRunning(true);
            setShowEndScrean({...showEndScrean, show: false});
        }else{
            window.alert("Reikia įvesti laiką")
        }
    }

    function pauseTimer(){
        setIsRunning(false);
    }

    function stopTimer(){
        resetTimer();
        setShowEndScrean({...showEndScrean, show: false});
    }

    function resetTimer(){
        setIsRunning(false);
        setMiliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const changeSeconds = (e) => {
        setSeconds(e.target.value);
    };
    const changeMinutes = (e) => {
        setMinutes(e.target.value);
    };
    const changeHours = (e) => {
        setHours(e.target.value);
    };

    return (
        <div>
            {showEndScrean.show && (
                <h1 className='title text-light'>{showEndScrean.message}</h1>
                )}

            <Timer
                miliseconds={miliseconds} 
                seconds={seconds} 
                minutes={minutes} 
                hours={hours}
                changeSeconds={changeSeconds}
                changeMinutes={changeMinutes}
                changeHours={changeHours}
                />

            <br />

            {!isRunning && (
                <button className="btn btn-accept btn-lg" onClick={startTimer}>
                    Start
                </button>)}
            {isRunning && (
                <button className="btn btn-warning btn-lg" onClick={pauseTimer}>
                    Pause
                </button>)}{" "}
            <button className="btn btn-danger btn-lg" onClick={stopTimer}>
                STOP
            </button>
        </div>
    );
}