import React from 'react'
import { useParams } from 'react-router'
import Leatestpost from '../LatestPost/Leatespost'
import Navbar from '../Layout/Navbar/Navbar'
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { entrancequestiondata } from './Entrancedata';
import { entrancequestiondata } from '../Entrance/Entrancedata';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Footer from '../Layout/Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';


export default function SubjectquestionView() {
    const { semester, subject } = useParams()
    const [getquestion, setQuestion] = useState(null)
    const [filtersubject, SetFiltersubject] = useState(null)

    const id = '2017'
    const questiontype = 'objective'
    const filterdata = entrancequestiondata.find((item) => item.year === id);
    const API_URL = 'http://127.0.0.1:8000';
    useEffect(() => {
        const fetchData = async () => {

            try {

                const response = await fetch(`${API_URL}/files?semester=${semester.toLowerCase()}&questiontype=${questiontype}`);

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.detail || "Fetch failed");
                }
                const data = await response.json();
                // setFiles(data.files);
                setQuestion(data.files)
                // toast.success("Files fetched successfully");
            } catch (error) {
                console.error("Fetch error:", error);
                // toast.error("Failed to fetch files");
            }
        };
        fetchData();
    }, [semester])



    useEffect(() => {

        if (!getquestion) return;
        const filteredsubject = getquestion.find((item) => item.subject.toLowerCase() === subject.toLowerCase());

        console.log("get question", filteredsubject)
        SetFiltersubject(filteredsubject)
    }, [subject, getquestion])


    return (
        <div>
            <Navbar />
            <div className='w-full sm:w-[80%] m-auto bg-white py-2'>
                <h1 className='text-2xl font-bold mt-10'>{subject} Tu old question and model set</h1>
                <div className='flex  gap-4 '>
                    <div className="w-full h-[500px] border mt-5 py-1 BCA Question Bank border-black">


                        {/* <div style={{ height: '480px' }}>
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js`}>

                                <Viewer
                                    fileUrl={filtersubject.filename}

                                /> 
                                {/* <Viewer fileUrl={`http://127.0.0.1:8000/files/${filtersubject?.filename}`} />
                            </Worker>
                        </div> */}
                        <div style={{ height: '480px' }}>
                            {filtersubject ? (
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                                    {/* <Viewer fileUrl={`${API_URL}/files/${filtersubject.content_type}`} /> */}
                                    <Viewer fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />


                                </Worker>
                              
                            ) : (
                                <div className=' h-full flex items-center justify-center'>
                                    <p className='text-xl font-semibold'>No question found for this subject.</p>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* <Leatestpost /> */}
                    <div>
                        <Leatestpost />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
