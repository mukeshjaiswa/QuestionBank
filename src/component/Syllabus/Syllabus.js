import React from 'react'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'
import { coursedata, semesterData } from './Syllabusdata'

export default function Syllabus() {
    return (
        <div>
            <Navbar />
            <div className=' w-full sm:w-[80%] m-auto mt-10'>
                <div className='w-full px-5 '>
                    <h1 className='text-5xl font-bold'>Bachelor Of Computer Application (BCA) Syllabus</h1>

                    <div className='sm:px-5 mt-10'>
                        <h1 className='underline text-5xl font-semibold'>Introduction </h1>

                        <p className='text-lg text-gray-600 mt-5'>The Bachelor of Computer Applications (BCA) program at Tribhuvan University (TU) is a four-year undergraduate degree designed to produce skilled IT professionals with strong theoretical and practical knowledge in computer applications. The program is divided into eight semesters, focusing on developing students’ abilities in programming, software development, database management, networking, and system analysis.
                            <br /> <br />
                            The BCA curriculum combines core computer science subjects with general education, communication skills, and professional training to prepare students for careers in the tech industry or further studies in computer science and related fields. With a strong emphasis on project work and internships, the program ensures students are industry-ready upon graduation.
                            <br /><br />

                            It is ideal for students aiming to pursue careers as software developers, web designers, system analysts, IT officers, and database administrators.</p>
                    </div>
                </div>

                <div className='w-full sm:w-[80%] m-auto  mt-10 '>
                    <table className='w-full border border-collapse mb-5'>
                        <thead>
                            <tr className='text-center text-xl'>
                                <th className='border px-4 py-2 bg-slate-300 '>Course</th>
                                <th className='border px-4 py-2 bg-slate-300 '>Credit Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* You can insert rows like this */}
                            {coursedata.map((item, index) => (
                                <tr key={index} className='text-center text-xl  text-black'>
                                    <td className='border px-4 py-2'>{item.course}</td>
                                    <td className='border px-4 py-2'>{item.credithr}</td>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                </div>
                {/* {Semester subject} */}
                <div className='w-full overflow-x-scroll sm:overflow-hidden sm:w-[80%] m-auto  mt-10'>
                    <table className='w-full border border-collapse mb-5 bg-white' >
                        {semesterData.map((item, index) => (
                            <div div key={index}>
                                <thead>
                                    <tr>
                                        <th colSpan="7" className='text-center text-2xl font-normal py-4'>{item.semester}</th>
                                    </tr>
                                    <tr className='text-center text-xl'>
                                        <th className='border px-4 py-2  bg-slate-300'>Sn</th>
                                        <th className='border px-4 py-2 bg-slate-300 '>Course Code</th>
                                        <th className='border px-4 py-2 bg-slate-300 '>Course Title</th>
                                        <th className='border px-4 py-2 bg-slate-300 '> Credit Hrs.</th>
                                        <th className='border px-4 py-2 bg-slate-300 '> Lecture Hrs.</th>
                                        <th className='border px-4 py-2 bg-slate-300 '>Tutorial Hrs.</th>
                                        <th className='border px-4 py-2 bg-slate-300 '>Lab Hrs.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* You can insert rows like this */}
                                    {item.subjects.map((subject, idx) => (
                                    <tr className='text-center text-xl  text-black'>
                                        <td className='border px-4 py-2'>{subject.sn}</td>
                                        <td className='border px-4 py-2'>{subject.CourseCode}</td>
                                         <td className='border px-4 py-2'>{subject.CourseTitle}</td>
                                          <td className='border px-4 py-2'>{subject.CreditHrs}</td> 
                                          <td className='border px-4 py-2'>{subject.LectureHrs}</td>
                                           <td className='border px-4 py-2'>{subject.TutorialHrs}</td>
                                            <td className='border px-4 py-2'>{subject.LabHrs}</td>
                                    </tr>
                                    ))}




                                </tbody>
                            </div>
                        ))}


                    </table>
                </div>


            </div>
            <Footer/>
        </div>
    )
}
