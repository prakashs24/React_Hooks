import React, { useEffect, useState } from "react";

function Useeffect(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
    console.log("Run useEffect",count);
    return ()=>{
        console.log("Clean up",count)
    };
    },[count]);
    return(
     <>
        <h3>Count {count}</h3>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
     </>
    )
}
export default Useeffect