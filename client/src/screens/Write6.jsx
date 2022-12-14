import React from 'react'
import bgImg from "../assets/manzara5.jpeg"
import {HomeIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Write6() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/");
    }
  
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0'>
                <p className='mr-3'>6</p>
                <h1 className='text-lg md:text-2xl font-bold'>Bazen ilham ne yaparsan yap gelmez.  Eğer hala ilham gelmediyse düşünme dışarı çık ve sosyalleş! Başka insanların düşünceleri sende bir ilham ışığı yakabilir. </h1>
            </div>
            <p className='text-white my-3 mx-5'>Unutma, gününe devam ederken aklına gelen her şeyi not almalısın.</p>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'><span className='hidden md:block'>Ana Sayfa</span><HomeIcon className='w-5 md:ml-2'></HomeIcon></button>
        </div>
    </div>

  )
}

export default Write6