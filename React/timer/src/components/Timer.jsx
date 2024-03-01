import {React} from "react"
import {BsStopwatch} from "react-icons/bs"
import styled from "styled-components"

const TimerWrapper = styled.div`
    margin-top: 30vh;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    background-color: #222;
    color: #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 6px rgba(0,0,0,0.4);
    padding: 1rem 0;

    .stop-watch{
        font-size: 6rem;
        margin-right: 1rem;
    }
    label{
        margin-bottom: 0.5rem;
    }
    input{
        width: 100px;
        margin-right: 1rem;
        color: #282c34;
        outline: none;
        border: none;
        font-size: 4.5rem;
        font-weight: 600;
        text-align: center;
        padding: 0rem 0.5rem;
        border-radius: 5px;
    }
    input:hover{
        background-color: #928f8f;
    }
    `

export default function Timer({
    miliseconds, seconds, minutes, hours,
    changeSeconds, changeMinutes, changeHours}){
    return(
        <TimerWrapper>
            <BsStopwatch className="stop-watch"/>
            <div className="d-flex flex-column">
                <label>h</label>
                <input value={hours} onChange={changeHours}/>
            </div>
            <div className="d-flex flex-column">
                <label>m</label>
                <input value={minutes} onChange={changeMinutes}/>
            </div>
            <div className="d-flex flex-column">
                <label>s</label>
                <input value={seconds} onChange={changeSeconds}/>
            </div>
            <div className="d-flex flex-column">
                <label>ms</label>
                <input value={miliseconds}/>
            </div>
        </TimerWrapper>
    )
}