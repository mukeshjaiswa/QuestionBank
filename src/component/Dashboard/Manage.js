import React from 'react'
import { useNavigate, useParams } from 'react-router'
import Left from './Left'

export default function Manage() {
    const { id } = useParams()
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
                <div className='w-[900px]  ml-[350px]  p-5  '>
                    <h1 className='w-full text-center text-xl font-semibold'>{id} semester Question</h1>
                    <div className='mt-10'>
                        <table className="min-w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-gray-700 text-left">
                                <tr>
                                    <th className="px-4 py-2 border-b">SN</th>
                                    <th className="px-4 py-2 border-b">Subject Name</th>
                                    <th className="px-4 py-2 border-b">Semester</th>
                                    <th className="px-4 py-2 border-b">Question</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800">
                                {/* Example row */}
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-2 border-b">1</td>
                                    <td className="px-4 py-2 border-b">Computer Fundamentals</td>
                                    <td className="px-4 py-2 border-b">{id}</td>
                                    <td className="px-4 py-2 border-b">Explain input and output devices.</td>
                                </tr>
                                {/* Repeat <tr> for more rows */}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
