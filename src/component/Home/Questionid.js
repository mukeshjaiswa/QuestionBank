import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Banner from '../Bannersection/Banner'
import Navbar from '../Layout/Navbar/Navbar'
import postlogo from '../../assest/postlogo.png'
import { data } from './Homepostdata'
import Footer from '../Layout/Footer/Footer'
import { semestersubject } from './Homepostdata'
import Leatestpost from '../LatestPost/Leatespost';

export default function Questionid() {
  const { year } = useParams()
  const location = useLocation();

  const semester = location.state?.semester;
  const fetchsemester = semestersubject.filter((item) => item.semester.toLowerCase() === semester.toLowerCase());
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };


  return (
    <div>
      <Navbar />
      <Banner />
      <div className=' w-full sm:w-[80%] m-auto mt-10 px-5 sm:px-0'>
        <h1 className='text-xl font-semibold mb-5 underline '> {capitalizeFirstLetter(semester)} Semester old Question</h1>

        <div className='flex  gap-4 '>
          <div className='w-full px-5  flex flex-col gap-10'>
            {fetchsemester.map((item, index) => (
              <div key={index} className='mt-5 flex flex-col' >
                <div className='flex flex-col gap-3'>
                  {item.subject.map((subject, index) => (

                    <Link to={`/subjectquestion/${subject}`} key={index} className='text-lg hover:underline hover:text-blue-500 font-semibold'>{subject} </Link>
                  ))}



                </div>
              </div>
            ))}





            <div className='mt-5'>
              <h1 className='w-full text-2xl font-semibold text-black text-center'>About us </h1>
              <h3 className='mt-5 text-lg'>
                BCA Question Bank is a comprehensive platform designed to help BCA students under Tribhuvan University access semester-wise questions, model sets, and entrance exam materials all in one place. Our goal is to simplify exam preparation by providing organized, reliable, and updated study resources. Whether you’re revising for internal exams or final assessments, this platform offers easy navigation and responsive design for use on any device. We continuously update our content to keep it relevant and useful. BCA Question Bank aims to support students in learning efficiently and achieving academic success with confidence.</h3>
            </div>
          </div>
          {/* {leatest question} */}
          <Leatestpost />
        </div>
      </div>
      <Footer />
    </div>
  )
}
