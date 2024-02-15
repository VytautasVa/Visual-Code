import { useState } from "react";

export default function ColorPicker(){
    return(
        <div className="border p-2">
            <h3>Pasirinkite savo spalva</h3>
            
            <input 
                type="color"
                name="color"
                onChange = {(event)={
                    setColor(event.target.value);
                } />
        </div>
    )
}