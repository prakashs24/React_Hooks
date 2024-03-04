import React, { createContext, useContext, useState } from "react";
import UseContext2 from "./UseContext2";

export const LoginContext = createContext();
 const UseContext = ({ children }) => {
    const [userDetails,setUserDetails]=useState(true)
                      
  return (
     <LoginContext.Provider value={userDetails}>
        {children}
     </LoginContext.Provider>
  )   
}

export default UseContext