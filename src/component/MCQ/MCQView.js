import React from 'react'
import Navbar from '../Layout/Navbar/Navbar'
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { entrancequestiondata } from './Entrancedata';
import { entrancequestiondata } from '../Entrance/Entrancedata';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Footer from '../Layout/Footer/Footer';
import { useParams } from 'react-router';
import Leatestpost from '../LatestPost/Leatespost';

export default function MCQView() {
    const { name } = useParams()
    console.log(name)
    const id = '2017'
    const filterdata = entrancequestiondata.find((item) => item.year === id);
  return (
    <div>
        <Navbar/>
        <div className='w-full sm:w-[80%] m-auto bg-white py-2'>
                <h1 className='text-2xl font-bold mt-10'>{name} MCQ old question and model set</h1>
                <div className='flex  gap-4 '>
                    <div className="w-full h-[500px] border mt-5 py-1 BCA Question Bank border-black">


                        <div style={{ height: '480px' }}>
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js`}>

                                <Viewer
                                    fileUrl={filterdata.question}

                                />
                            </Worker>
                        </div>

                    </div>

                    {/* <Leatestpost /> */}
                    <div>
                        <Leatestpost/>
                    </div>
                </div>
            </div>

            <Footer/>
    </div>
  )
}
