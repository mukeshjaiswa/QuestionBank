import React from 'react'
import { Link, useNavigate } from 'react-router'
import Left from './Left'
import Right from './Right';

export default function Dashboard() {
    const navigate = useNavigate();
    const logouthandler = () => {
        navigate('/')
    }
    return (
        <div >
            <div className='w-full   sticky top-0   bg-slate-800   flex items-center justify-between'>
                <div className='w-full  flex  items-center justify-center'>
                    <h1 className='text-white text-xl font-semibold py-3 px-10 ml-10'>Admin Dashboard</h1>
                </div>
                <Link to='/' className='w-[10%] flex items-end justify-end px-10'>
                    <h1  className='text-red-500 font-sans hover:text-red-600 cursor-pointer'>Logout</h1>
                </Link>
            </div>
            <div className='w-full flex justify-between gap-3 '>
                <Left />
                <Right />
            </div>
        </div>
    )
}

