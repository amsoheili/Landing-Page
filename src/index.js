import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
const tmpApp = (<React.StrictMode><App/></React.StrictMode>);
root.render(tmpApp);