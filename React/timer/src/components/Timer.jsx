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
    `

export default function Timer(){
    return(
        <TimerWrapper>
            <BsStopwatch/>
            <div className="d-flex flex-column">
                <label>hh</label>
                <input value={0}/>
            </div>
            <div className="d-flex flex-column">
                <label>mm</label>
                <input value={0}/>
            </div>
            <div className="d-flex flex-column">
                <label>ss</label>
                <input value={0}/>
            </div>
            <div className="d-flex flex-column">
                <label>ms</label>
                <input value={0}/>
            </div>
        </TimerWrapper>
    )
}