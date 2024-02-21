import { useState } from "react"

export default function Form3(){
    const[first, setFirst] = useState(100);

    return(
        <div className="Form3">
            <div>
                <span>Pirmas skaicius</span>
                <input 
                    type="number"
                    value={first}
                    onChange={(e)=> {
                        setFirst(e.target.value);
                    }}
            />
            </div>

            <div>
                <span>Antras skaicius</span>
                <input 
                    type="number" 
                    value={first/2}
                    onChange={(e)=>{
                        setFirst(e.target.value*2);
                    }}/>
            </div>
        </div>
)}