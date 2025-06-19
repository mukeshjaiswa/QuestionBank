import React from 'react'


import { data } from './Homepostdata'
import { useState } from 'react'
import Developer from './Developer'

import Navbar from '../Layout/Navbar/Navbar'
import Footer from '../Layout/Footer/Footer'
import { Link, useNavigate } from 'react-router'
import Banner from '../Bannersection/Banner'

export default function Home() {
    const naviage = useNavigate();
    const [postindex, setPostIndex] = useState(6);
    const handlerviewmore = () => {
        setPostIndex(postindex => postindex + 3);
    }
    const handlerviewless = () => {
        if (postindex < 6) {
            setPostIndex(postindex);
        }
        else if (postindex > 6) {
            setPostIndex(postindex => postindex - 3)
        }

    }
    const viewquestion = (index, semester) => {
        naviage(`/question/${index}`, {
            state: { semester }
        })
    }
    const viewmcqquestion = (index, semester) => {
        naviage(`/mcqquestion/${semester}`, {
            state: { semester }
        })
    }
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };

    return (
        <div>
            <Navbar />
            <Banner />
            {/* {Question section} */}
            <div className='w-[90%] m-auto mt-10 '>
                <h1 className='text-3xl font-semibold'>Latest Question</h1>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-3'>
                    {data.slice(0, postindex).map((item,index) => (
                        <div key={index} className=' mt-5 bg-white border rounded-md cursor-pointer' onClick={()=>viewquestion(item.index,item.semester)}>
                            <div className='w-full'>
                                <img src={item.image} alt="" className='rounded-t-md' />
                            </div>
                            <div className='py-3 px-2'>
                                <button  className='text-xl hover:text-blue-600 cursor-pointer'>{capitalizeFirstLetter(item.semester)} semester old  question </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' w-full gap-3 mt-5 flex items-center justify-center'>
                    <button className='border border-[#4db5ff] p-2 rounded-md hover:bg-black hover:text-white hover:border-transparent' onClick={handlerviewmore}>View More</button>
                    {postindex > 6 ?

                        <button className='border border-transparent bg-black text-white p-2 rounded-md hover:bg-black  hover:border-[#4db5ff] hover:bg-transparent hover:text-black' onClick={handlerviewless}>View Less</button>
                        : ''}
                </div>
            </div>
            {/* {Mcq section} */}
            <div className='w-[90%] m-auto mt-10'>
                <h1 className='text-3xl font-semibold'>Latest MCQ Question</h1>
                <div className='grid sm:grid-cols-2  lg:grid-cols-3 mt-5 gap-3'>
                    {data.slice(0, postindex).map((item,index) => (
                        <div key={index} className=' mt-5 border bg-white  rounded-md cursor-pointer' onClick={()=>viewmcqquestion(item.index,item.semester)}>
                            <div className='w-full'>
                                <img src={item.image} alt="" className='rounded-t-md' />
                            </div>
                            <div className='py-3 px-2'>
                                <h1 className='text-xl hover:text-blue-600 cursor-pointer'>{capitalizeFirstLetter(item.semester)} semester old   mcq question </h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' w-full gap-3 mt-5 flex items-center justify-center'>
                    <button className='border border-[#4db5ff] p-2 rounded-md hover:bg-black hover:text-white hover:border-transparent' onClick={handlerviewmore}>View More</button>
                    {postindex > 6 ?

                        <button className='border border-transparent bg-black text-white p-2 rounded-md hover:bg-black  hover:border-[#4db5ff] hover:bg-transparent hover:text-black' onClick={handlerviewless}>View Less</button>
                        : ''}
                </div>
            </div>
            {/* {developer section} */}
         
            <Developer />
            <Footer />
        </div>
    )
}
