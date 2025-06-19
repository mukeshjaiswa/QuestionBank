import React from 'react'
import { useParams } from 'react-router'
import libeary from '../../assest/libeary.jpg'

export default function Banner() {
 
  return (
    <div className='w-[100%] h-[500px] m-auto  opacity-60  flex items-center justify-center' style={{
        backgroundImage: `url(${libeary})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        height: '85vh' // Optional: makes sure image fills the viewport height
    }}>
        <h1 className='text-5xl font-extrabold text-[#fdfdff]'>BCA Question Bank</h1>

    </div>
  )
}
