import React, { useState } from 'react'
import Cards from '../Components/Cards';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

function Course() {
  const [book, setBook]=useState([])

  useEffect(()=>{
    const getBook = async()=>{
      try{
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data);
        setBook(res.data);
        
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='items-center justify-center text-center'>
        <h1 className='mt-28 text-2xl md:text-4xl'> 
        We're delighted to have you <span className='text-pink-500'>here👍
        </span></h1>
        <p className='mt-12'>Reading books is a transformative experience that opens up new worlds, ideas, and perspectives. 
        It stimulates the mind, enhances knowledge, and improves cognitive abilities. 
        Books have the power to transport readers to different times and places, fostering empathy and understanding for diverse cultures and viewpoints.</p>
      
      <Link to="/">
      <button className='mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
      Back</button> 
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
      </div>
    </>
  )
}

export default Course