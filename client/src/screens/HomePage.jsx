import React from 'react'
import bgImg from '../assets/manzara.png'
import {GlobeIcon, ArrowRightIcon } from '@heroicons/react/outline'
import {DocumentTextIcon, PencilIcon,MusicNoteIcon,SparklesIcon} from '@heroicons/react/solid'
function HomePage() {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-white text-center'>
        <div className="w-full h-screen bg-purple/30 absolute z-1">
            <img className="w-full h-screen object-cover mix-blend-overlay" src={bgImg} alt="" />
        </div>
        <div className='z-0'>
        <h1 className='font-bold text-4xl mb-2'>Ambianche hoş geldiniz!</h1>
        <p>İlhamınızın gelmesi için gerekli ortamlar sağlandı. Hemen aşağıdan ilhama ihtiyacınız olan alanı seçin ve gerisini bize bırakın!</p>
        <div className="bg-white rounded-xl shadow-2xl mt-6">
            <div className="p-5 flex justify-center items-center">
                <button className='bg-purple flex items-center rounded-lg px-4 py-2 text-white mx-3 border-2 border-purple'><GlobeIcon className='w-5 mr-1'></GlobeIcon>İlham Al</button>
                <button className='text-purple flex items-center rounded-lg  px-4 py-2 bg-white mx-3 border-2 border-purple'><DocumentTextIcon className='w-5 mr-1'></DocumentTextIcon>Yazıyorum</button>
                <button className='text-purple flex items-center rounded-lg px-4 py-2 bg-white mx-3 border-2 border-purple'><PencilIcon className='w-5 mr-1'></PencilIcon>Çiziyorum</button>
                <button className='text-purple flex items-center rounded-lg px-4 py-2 bg-white mx-3 border-2 border-purple'><SparklesIcon className='w-5 mr-1'></SparklesIcon>Düşünüyorum</button>
                <button className='text-purple flex items-center rounded-lg px-4 py-2 bg-white mx-3 border-2 border-purple'> <MusicNoteIcon className='w-5 mr-1'></MusicNoteIcon>Besteliyorum</button>
            </div>
                        
        </div>
        <p className='my-5'>veya</p>
        <a className='flex shadow-2xl items-center justify-center text-xl' href="">Ortamlara Git<ArrowRightIcon className='w-7 ml-2'></ArrowRightIcon></a>
        </div>
    </div>
  )
}

export default HomePage