import React, {useEffect,useState,useLayoutEffect,useRef} from 'react'

const UseLayoutEffect = () => {
    const [toggle,setToggle] = useState(false);
    const textRef = useRef();
    useLayoutEffect(()=>{
        if(textRef.current != null){
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`;
        }
    },[toggle]);
  return (
    <div>
      <button onClick={()=> setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}>Code Bless You</h4>}
    </div>
  )
}

export default UseLayoutEffect
