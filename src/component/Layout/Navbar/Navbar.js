import React from 'react'
import logo from '../../../assest/logo.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

export default function Navbar() {
    const [openmenu, setOpenmenu] = useState(false)
    const handleropenmenu = () => {
        setOpenmenu(!openmenu)
    }
    return (
        <div className='  w-full   bg-gray-50 sticky top-0 z-50   ' >
            <div className=' px-10 sm:px-10 flex items-center justify-between '>
                <Link to='/' className='w-[60px]'>
                    <img src={logo} alt='' className='w-[60px] h-auto' />
                </Link>
                {/* {Desktop responsive} */}
                <div className=' '>
                    <div className='md:hidden  p-2 border border-slate-700 rounded-md  '>
                        {!openmenu ? <Menu onClick={handleropenmenu} /> : <X onClick={handleropenmenu} />}
                    </div>
                    <div className='md:flex items-center hidden '>
                        <ul className='py-5 text-black flex md:gap-3'>
                            <Link to='/' className='w-full py-2 text-xl p-2 hover:text-slate-500 rounded-lg  cursor-pointer font-semibold '>Home</Link>
                            <Link to='/questions' className='w-full py-2 text-xl p-2 hover:text-slate-500 rounded-lg  cursor-pointer font-semibold '>Question</Link>
                            <Link to='/MCQ' className='w-full py-2 text-xl p-2 hover:text-slate-500 rounded-lg  cursor-pointer font-semibold '>MCQ</Link>

                            <Link to='/entrance' className='w-full py-2 text-xl p-2 hover:text-slate-500 rounded-lg  cursor-pointer font-semibold '>Entrance</Link>

                            <Link to='/syllabus' className='w-full py-2 text-xl p-2 hover:text-slate-500 rounded-lg  cursor-pointer font-semibold '>Syllabus</Link>
                        </ul>
                    </div>


                </div>
            </div>
            {/* {Mobile responsive} */}
            {openmenu ?
                <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30">
                    <div className='w-[60%] h-screen absolute top-0 z-10 right-0 shadow-lg bg-gray-50 flex-col flex  items-start '>

                        <div className='absolute right-3 top-4'>
                            <X size={30} onClick={handleropenmenu} />
                        </div>
                        <ul className=' w-full py-5 mt-10 flex-col  flex gap-3'>
                            <Link to='/' className='w-full py-2  border-t px-5 border-gray-300  cursor-pointer hover:text-slate-500  '>Home</Link>

                            <Link to='/questions' className='w-full py-2  border-t px-5  cursor-pointer  hover:text-slate-500 '>Question</Link>
                            <Link to='/MCQ' className='w-full py-2  border-t px-5  cursor-pointer hover:text-slate-500  '>MCQ</Link>
                            <Link to='/entrance' className='w-full py-2  border-t px-5  cursor-pointer hover:text-slate-500 '>Entrance Question</Link>
                            <Link to='/syllabus' className='w-full py-2  border-t px-5  cursor-pointer hover:text-slate-500 '>Syllabus</Link>
                        </ul>
                    </div>
                </div> : ""}

        </div>
    )
}
