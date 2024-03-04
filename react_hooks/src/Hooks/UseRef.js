import React, { useRef } from "react";

const UseRef = () => {
    const inputEle = useRef();
    const handleclick =()=>{
        console.log(inputEle)
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
    };
  return (
    <div>
      <input type='text' ref={inputEle} />
      <button onClick={handleclick}>Click Here</button>
    </div>
  )
}

export default UseRef
