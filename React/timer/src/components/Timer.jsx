import {React} from "react"
import {BsStopwatch} from "react-icons/bs"


export default function Timer({
    miliseconds, seconds, minutes, hours,
    changeSeconds, changeMinutes, changeHours}){
    return(
        <div className="TimerWrapper">
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
        </div>
    )
}