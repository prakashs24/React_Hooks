import React, { useContext } from 'react'
import { LoginContext } from './UseContext'
import UseContext from './UseContext';

const UseContext2 = () => {
const login = useContext(LoginContext);
console.log(login);
return <h3>Single POST</h3>
}
export default UseContext2;
