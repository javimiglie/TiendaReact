import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAiJ55EJ3UO4EnwgsbOZXl1GeYOL6F1q9A',
  authDomain: 'ecommerce-react-javi.firebaseapp.com',
  projectId: 'ecommerce-react-javi',
  storageBucket: 'ecommerce-react-javi.appspot.com',
  messagingSenderId: '743724298494',
  appId: '1:743724298494:web:02e21fa464522e454a35af',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
