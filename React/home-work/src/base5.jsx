import Base4 from "./base4";

export default function Base5({text1, text2, color = "red"}){
    return(
        <div style={{color:color}}>
            <Base4
                text1={text1}
                text2={text2}
            />
        </div>
    )
}