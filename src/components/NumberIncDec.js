import React,{useState} from "react";

const NumberIncDec = ()=>{
    const [number,setNumber]=useState(0);
    return(
        <>
            <button onClick={()=>setNumber(number+1)}>Increment number</button>
            <button onClick={()=>setNumber(number-1)}>Decrement number</button>
            <p>{number}</p>
        </>
    );
}

export default NumberIncDec;