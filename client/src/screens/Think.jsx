import React from 'react'
import bgImg from "../assets/manzara2.png"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";

function Think() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/think2");
    }
  
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mx-5'>
                <p className='mr-3'>1</p>
                <h1 className='text-2xl font-bold'>Fikir bulmak için önce sorun bulmalıyız!</h1>
            </div>
            <p className='mx-5 text-white my-3'>Eğer sorunu hala bulmadıysanız aşağıdakilerden esinlenebilirsiniz.</p>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Rastgele konu üret</a>
            <div className='grid md:grid-cols-2 gap-y-5 gap-x-7 m-5'>
                <div>
                    <h1 className='text-2xl'>Konu 1</h1>
                    <p className='text-content text-[14px] md:text-[16px]'>Konu 1 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Konu 2</h1>
                    <p className='text-content text-[14px] md:text-[16px]'>Konu 2 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Konu 3</h1>
                    <p className='text-content text-[14px] md:text-[16px]'>Konu 3 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Konu 4</h1>
                    <p className='text-content text-[14px] md:text-[16px]'>Konu 4 hakkında uzunca bir açıklama. Toplamda maksimum 2 satır olacak şekilde</p>
                </div>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Think