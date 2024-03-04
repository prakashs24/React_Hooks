import React, {useMemo,useState} from 'react'

const UseMemo = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);
    const memoCalculation = useMemo(()=>{
        return expensiveFunction(number)
    },[number])
    
    const cssStyle = {
        backgroundColor:dark ? "black" : "white",
        color:dark ? "white" : "black",
    };
  return (
    <div style={cssStyle}>
      <input 
      onChange={(e)=>setNumber(e.target.valueAsNumber)}
      type='number'
      value={number} />
      <h2>Calculation : {memoCalculation}</h2>
      <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

export default UseMemo
