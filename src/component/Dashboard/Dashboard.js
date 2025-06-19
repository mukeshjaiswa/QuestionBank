import React from 'react'
import { useNavigate } from 'react-router'
import Left from './Left'
import Right from './Right';

export default function Dashboard() {
    const navigate = useNavigate();
    const logouthandler = () => {
        navigate('/admin')
    }
    return (
        <div >
            <div className='w-full  bg-slate-800   flex items-center justify-center'>
                <div className='w-[90%] flex items-center justify-center'>
                    <h1 className='text-white text-xl font-semibold py-3 px-5'>Admin Dashboard</h1>
                </div>
                <div className='w-[10%] flex items-end justify-end px-10'>
                    <h1 onClick={logouthandler} className='text-red-500 font-sans hover:text-red-600 cursor-pointer'>Logout</h1></div>
            </div>
            <div className='w-full flex justify-between gap-3 '>
                <Left />
                <Right/>
            </div>
        </div>
    )
}

