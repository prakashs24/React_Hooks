import React, { useState } from 'react'

const UseState = () => {
    let [details,setDetails]=useState(0)
    function handle(){
        setDetails(details + 1)
    }
  return (
    <div>
      <h1>Count{details}</h1>
      <button onClick={handle}>Click</button>
    </div>
  )
}

export default UseState
