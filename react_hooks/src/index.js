import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Useeffect from './Hooks/UseEffect';
import UseContext from './Hooks/UseContext';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import UseMemo from './Hooks/UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseMemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
