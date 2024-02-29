import React, { useState ,useEffect } from "react";
import Timer from "./Timer";


export default function CountDownTimer(){
    const[hours, setHours] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(0);
    const[miliseconds, setMiliseconds] = useState(0);
    const[isRunning, setIsRunning] = useState(null);

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
        return () => clearInterval(interval);
    },[miliseconds, seconds, minutes, hours, isRunning]);

    return (
        <div>
            <h1 className='title'>Happy coding in 2024 !!!</h1>

            <Timer/>
        </div>
    );
}