import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Signup from './Components/Signup';
import Login from './Components/Login';  // Import Login component
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider';
import ProtectedRoute from './Context/ProtectedRoute';
import './index.css';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}


export default App;
