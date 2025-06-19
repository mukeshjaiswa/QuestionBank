
import React, { useState } from 'react';

import { Search } from 'lucide-react';
import Navbar from '../Layout/Navbar/Navbar';
import { entrancequestiondata } from './Entrancedata';
import Banner from '../Bannersection/Banner';
import { Link } from 'react-router';
import Developer from '../Home/Developer';
import Footer from '../Layout/Footer/Footer';



export default function Entrance() {

    return (
        <div>
            <Navbar />
            <Banner />
            {/* {Entrance syllabus} */}
            <div className='w-[80%] m-auto mt-10 bg-white px-5 py-4 rounded-md  '>
                <h1 className='py-2 text-2xl font-bold'> TU BCA Entrance Syllabus: MCQs  </h1>

                <p className='py-2 text-2xl text-gray-500 font-semibold'>50*1= 50 (Math)</p>

                <p className='py-2 text-2xl text-gray-500 font-semibold'> 40*1= 40 (English)</p>

                <p className='py-2 text-2xl text-gray-500 font-semibold'> 10*1= 10 (G.K.)</p>
                <p className='py-2 text-2xl text-gray-500 font-semibold'> Total Marks = 100 ( Time: 2hrs)</p>




            </div>
            <div className=' w-[80%]  gap-5 mt-10 mb-5 m-auto grid sm:grid-cols-2 md:grid-cols-3'>
                {entrancequestiondata.map((item, index) => (
                    <div key={index} className='bg-white rounded-md'>
                        <img src={item.image} className='rounded-t-md' />
                        <div className='px-5 py-2'>
                            <Link to={`/entrancequestion/${item.year}`} className='text-xl hover:text-blue-400 cursor-pointer'> BCA Entrance Question - {item.year} Batch</Link>
                        </div>
                    </div>

                ))}
            </div>
            <Developer />
            <Footer />
        </div>
    );
}
