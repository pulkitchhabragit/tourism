import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <ToastContainer/>
    
  </div>
);


// Hr ek toast ko banane or show krne ke liye hme ek Toast Container banana pdega
