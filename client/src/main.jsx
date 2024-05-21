import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'; // Correct import for ReactDOM
import App from './App.jsx';
import './index.css';
import AuthProvider from "./Context/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
      <App />
    </div>
    </AuthProvider>
  </BrowserRouter>
);
