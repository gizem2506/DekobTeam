import React from 'react'
import bgImg from "../assets/manzara16.jpg"
import pat1 from "../assets/pattern.jpg"
import pat2 from "../assets/pattern2.jpg"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseUrl = "localhost:5001/api/v1/moods/uploadphoto";

function Draw3() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/draw4");
    }
    const [formData, setFormData] = React.useState([
        {
          title: "",
          category: "",
          content:"",
          img: null,
        },
      ]);
      var item = formData[Math.floor(Math.random() * formData.length)];
      React.useEffect(() => {
        getData();
      }, []);
      const getData = async () => {
        await axios
          .get("http://localhost:5001/api/v1/moods/uploadphoto")
          .then((response) => {
            setFormData(response.data.data.moods);
            //console.log(response.data.data.moods);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className="w-full h-screen absolute z-100">
            <img className="w-full h-screen absolute object-cover" src={bgImg} alt="" />
            <div className='w-full h-screen absolute  bg-purple/70 '></div>
        </div>
        <div className='max-w[1240px] m-auto px-10 md:px-40 text-white z-10'>
            <div className='flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0'>
                <p className='mr-3'>3</p>
                <h1 className='text-lg md:text-2xl font-bold'>Aşağıdaki desenler sana ilham verebilir:</h1>
            </div>
            <a className='text-[#56E1FF] mx-5 flex' href=""><RefreshIcon className='w-5 mr-2'></RefreshIcon> Rastgele desen öner</a>
            <div className='grid grid-cols-2 gap-y-5 gap-x-7 m-5'>
                <div className='flex flex-col items-center'>
                    <img className='m-5 w-[300px] h-[350px]' src={item.img} alt="" />
                </div>
                <div className='flex flex-col items-center'>
                    <img className='m-5 w-[300px] h-[350px]' src={item.img} alt="" />
                </div>
            </div>
            <button onClick={routeChange} className='text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg'> <span className='hidden md:block'>Devam edin</span>  <ArrowRightIcon className='w-5 md:ml-2'></ArrowRightIcon></button>
        </div>
    </div>

  )
}

export default Draw3