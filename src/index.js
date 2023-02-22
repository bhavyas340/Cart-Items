import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBeChcZYBw5-AOV7RrLNGfIMBv9eauk7TY",
  authDomain: "cart-67bfa.firebaseapp.com",
  projectId: "cart-67bfa",
  storageBucket: "cart-67bfa.appspot.com",
  messagingSenderId: "1027222253792",
  appId: "1:1027222253792:web:b2d87bd00fa00704652085"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

