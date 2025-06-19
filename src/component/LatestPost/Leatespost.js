import React from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { data } from '../Home/Homepostdata'

export default function Leatestpost() {
    const [postindex, setPostIndex] = useState(4);
    const handlerviewmore = () => {

        setPostIndex(postindex => postindex + 4);
    }
    const handlerviewless = () => {

        setPostIndex(postindex => postindex - 4);
    }
    const naviaget = useNavigate();
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const viewquestion = (index, semester) => {
        naviaget(`/question/${index}`, {
            state: { semester }
        })
    }

    return (
        <div className=' text-center hidden sm:block  bg-white shadow-xl rounded-md py-3'>
            <h1 className='text-xl font-bold mb-5'>Leatest Post</h1>
            {data.slice(0, postindex).map((item, index) => (
                <div key={index} className='grid grid-cols-2 cursor-pointer hover:bg-gray-100 items-start justify-start px-5 py-2 border-t' onClick={() => viewquestion(item.index, item.semester)} >
                    <div>
                        <img src={item.image} alt="" className='w-[200px] ' />
                    </div>
                    <div>
                        <h1 className='text-xl'>{capitalizeFirstLetter(item.semester)} semester old question </h1></div>
                </div>
            ))}
            <div className=' w-full gap-3 mt-5 flex items-center justify-center'>
                    <button className='border border-[#4db5ff] p-2 rounded-md hover:bg-black hover:text-white hover:border-transparent' onClick={handlerviewmore}>View More</button>
                    {postindex > 6 ?

                        <button className='border border-transparent bg-black text-white p-2 rounded-md hover:bg-black  hover:border-[#4db5ff] hover:bg-transparent hover:text-black' onClick={handlerviewless}>View Less</button>
                        : ''}
                </div>
        </div>
    )
}
