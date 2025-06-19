import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';

import Navbar from '../Layout/Navbar/Navbar';
import { entrancequestiondata } from './Entrancedata';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useParams } from 'react-router';
import Footer from '../Layout/Footer/Footer';


export default function Entrancequestion() {
    const{year} =useParams();
    

    const filterdata=entrancequestiondata.find((item)=>Number(item.year)===Number(year));
    console.log(filterdata)
  return (
    <div>
        <Navbar/>

         {/* Viewer Section */}
          <div className="w-[80%] py-3 bg-white mt-10 m-auto flex flex-col items-center justify-center space-y-16 rounded-md">
              
                        <div  className="w-full  h-[750px]">
                            <h1 className="text-xl font-bold mb-4 px-10">
                                BCA Entrance Question - {filterdata.year} Batch
                            </h1>
                          
                                <div style={{ height: '750px' }}>
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js`}>

                                        <Viewer
                                            fileUrl={filterdata.question}

                                        />
                                    </Worker>
                                </div>
                    
                        </div>
                 
            </div> 
            <Footer/>
    </div>
  )
}
