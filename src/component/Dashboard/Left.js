import { Folder, Plus } from 'lucide-react'
import React from 'react'
import logo from '../../assest/logo.png'

export default function Left() {
    return (
        <div className='w-[300px] h-[91vh] bg-gray-200 fixed  p-5'>
            <div className='flex items-center h-[80px] border-b border-gray-400 gap-3'>

                <img src={logo} alt="" className='w-[70px] h-[50px]' />
                <h1 className='text-xl font-semibold text-slate-600'>BCANEPALHUB</h1>

            </div>
           {semesterdat.map((data)=>(
            <div className='w-[250px] justify-between flex font-semibold items-center gap-3 mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>{data} semester Question </h1>

            </div>
           ))}
        </div>
    )
}

export const semesterdat=['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eight']
