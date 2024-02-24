import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import './index.css';

import App from './App';

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYhYk8Qg5Nd2PNqrq-_pJ3JLRBk3ZqWfU",
  authDomain: "caredontcarenews.firebaseapp.com",
  databaseURL: "https://caredontcarenews-default-rtdb.firebaseio.com",
  projectId: "caredontcarenews",
  storageBucket: "caredontcarenews.appspot.com",
  messagingSenderId: "1076140224134",
  appId: "1:1076140224134:web:1b2bdc7e857d08ebf32b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
export const auth = getAuth(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
