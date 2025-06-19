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
            {/* <div className='flex font-semibold items-center gap-3 justify-center mt-5 cursor-pointer '>
                <Plus className=''/>
                <h1> Add Question</h1>

            </div> */}
            <div className='w-[250px] justify-between flex font-semibold items-center gap-3 mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>First semester Question </h1>

            </div>
            <div className=' w-[250px] justify-between flex font-semibold items-center gap-3  mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>Second semester Question </h1>

            </div>
            <div className='flex font-semibold items-center gap-3 w-[250px] justify-between mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>Third semester Question </h1>

            </div>
            <div className='flex font-semibold items-center gap-3 w-[250px] justify-between mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>Fourth semester Question </h1>

            </div>
            <div className='flex font-semibold items-center gap-3 w-[250px] justify-between mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>Fifth semester Question </h1>

            </div>
            <div className='flex font-semibold items-center gap-3 w-[250px] justify-between mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>Sixth semester Question </h1>

            </div>
            <div className='flex font-semibold items-center gap-3 w-[250px] justify-between mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>seventh semester Question </h1>

            </div>
            <div className='flex font-semibold items-center gap-3 w-[250px] justify-between mt-5 cursor-pointer'>
                <Folder className=''/>
                <h1>Eight semester Question </h1>

            </div>
        
        </div>
    )
}
