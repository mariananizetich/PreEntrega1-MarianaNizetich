import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyAHRThcCOIowdFR0gC-pIszhLIes5COsj4",
    authDomain: "react-js-f7f33.firebaseapp.com",
    projectId: "react-js-f7f33",
    storageBucket: "react-js-f7f33.appspot.com",
    messagingSenderId: "215614312686",
    appId: "1:215614312686:web:8864e6b7e05a77040e23ff"
  };

  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


reportWebVitals();
