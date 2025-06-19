import React from 'react'
import logo from '../../../assest/logo.png'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div className='w-full bg-gray-50 px-10  mt-10'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-10 py-5'>
                {/* {about section} */}
                <div className=' flex flex-col sm:items-center'>
                    <a href="/">
                    <img src={logo} alt="" className='w-[200px] h-[130px]' />
                    </a>
                    <h3 className=''>We are dedicated to helping BCA students succeed by providing a reliable and organized question bank. Access questions from all semesters, model sets, and entrance preparation materials—all in one place. Designed to support your academic journey with ease and confidence.</h3>
                </div>
                {/* {Links section} */}
                <div className=' flex flex-col sm:items-center'>
                    <h1 className=' text-xl font-semibold'>Links</h1>
                    <div className=''>
                        <ul className='space-y-4 mt-5 flex flex-col'>
                            <Link to='/' className='hover:text-slate-600 cursor-pointer hover:underline'>Home</Link>
                            <Link to='/questions' className='hover:text-slate-600 cursor-pointer hover:underline'>Question</Link>
                            <Link to='/MCQ' className='hover:text-slate-600 cursor-pointer hover:underline'>MCQ</Link>
                           
                            <Link to='/entrance' className='hover:text-slate-600 cursor-pointer hover:underline'>Entrance question</Link>
                            <Link to='/syllabus' className='hover:text-slate-600 cursor-pointer hover:underline'>Syllabus</Link>
                        </ul>

                    </div>
                </div>
                {/* {contact section} */}
                <div className='flex flex-col md:items-center '>
                    <h1 className='text-xl font-semibold'>Contact us</h1>
                    <div className='mt-5 space-y-4'>
                        <a href="tel:9817361906" className="flex items-center space-x-2 hover:text-blue-800">
                            <Phone />
                            <span>9817361906</span>
                        </a>
                        <a href="tel:9804327158" className="flex items-center space-x-2 hover:text-blue-800">
                            <Phone />
                            <span>9804327158</span>
                        </a>
                        <a href="mailto:bcaoldquestiontu@gmail.com" className="flex items-center space-x-2 hover:text-blue-800">
                            <Mail />
                            <span>bcaoldquestiontu@gmail.com</span>
                        </a>
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-semibold mt-5'>social Media</h1>
                        <div className='flex items-start justify-start gap-3 mt-5'>
                            <a href="https://www.facebook.com">
                                <Facebook size={50} className='shadow-sm cursor-pointer bg-white hover:bg-blue-500 hover:text-white rounded-md p-1' />
                            </a>
                            <a href="https://www.instagram.com">

                                <Instagram size={50} className='shadow-sm cursor-pointer bg-white hover:bg-red-500 hover:text-white rounded-md p-1' />
                            </a>

                        </div>
                    </div>

                </div>
            </div>


            <div className='w-full flex items-center justify-center py-5 border-t'>
                <h1 className='flex items-center'>
                 &copy; Copyright {new Date().getFullYear()} | 
                <Link Link to='/' className='hover:underline px-3'> BCANepalHub </Link>
                  | All Right Reserved
                </h1>
            </div>

        </div>
    )
}
