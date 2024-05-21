import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Correct import for BrowserRouter
import App from './App';
import './index.css';
import AuthProvider from "./Context/AuthProvider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <div className='dark:bg-slate-900 dark:text-white'>
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
