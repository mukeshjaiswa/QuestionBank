import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react'

import { useEffect } from 'react';
import { semestersubject } from '../Home/Homepostdata';



export default function Right() {
    const [semester, setSemester] = useState('');
    const [subject, setSubject] = useState('');
    const [file, setFile] = useState(null);

    const [getsemester, setGetsemester] = useState([])

    const API_URL = 'http://127.0.0.1:8000'

    // const uploadedquestion = async (questiondata) => {
    //     console.log("user  data:", 'This is loger');
    //     try {
    //         const res = await fetch(`${API_URL}/upload/`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(questiondata),
    //         });

    //         if (res.ok) {
    //             toast.success("User created successfully!", "green");
    //             //   fetchUsers();
    //         } else {
    //             const err = await res.json();
    //             toast.warn("Create failed: " + err.detail, "red");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         toast.error("Error creating user", "red");
    //     }


    // }

    // const handleradd = async () => {
    //     if (!semester || !subject || !file) {
    //         toast.warn("Please enter all fields");
    //         return;
    //     }

    //     else {
    //         const questiondata = {
    //             subject: subject,
    //             semester: semester,
    //             question: file,
    //         }
    //         uploadedquestion(questiondata)

    //     }

    // };

    // const handleradd = async () => {
    //     if (!semester || !subject || !file) {
    //         toast.warn("Please enter all fields");
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append("semester", semester);
    //     formData.append("subject", subject);
    //     formData.append("file", file);

    //     try {
    //         const response = await fetch("http://127.0.0.1:8000/upload/", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         if (!response.ok) {
    //             throw new Error("Upload failed");
    //         }

    //         const result = await response.json();
    //         toast.success(`Question added: ${result.filename}`);
    //     } catch (error) {
    //         console.error("Upload error", error);
    //         toast.error("Failed to upload");
    //     }
    // };

    const handleradd = async () => {
        if (!semester || !subject || !file) {
            toast.warn("Please enter all fields");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);  // Important: the key must match what FastAPI expects
        formData.append("subject", subject);
        formData.append("semester", semester);

        try {
            const response = await fetch(`${API_URL}/upload/`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || "Upload failed");
            }

            const result = await response.json();
            toast.success(`Question uploaded`);
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Failed to upload question");
        }
    };


    useEffect(() => {
        const matchsemester = semestersubject.filter((items) => items.semester === semester)
        setGetsemester(matchsemester)
        // console.log(matchsemester)
    }, [semester])

    console.log(getsemester)
    return (
        <div className='w-[900px]  ml-[350px]  p-5 '>
            <h1 className='w-full text-center text-xl font-semibold'>Add Question</h1>

            <div className='w-full flex flex-col mt-5 items-center space-y-3'>
                <div className='w-full px-10 space-y-2 '>
                    <h1 className='text-lg font-semibold'>Select semester</h1>
                    <select value={semester} placeholder='Semester' className='w-full py-1 px-3 outline-none text-lg border rounded-md ' onChange={(e) => setSemester(e.target.value)}>
                        <option value='' disabled selected>Select semester</option>
                        <option value='first' >First </option>
                        <option value='second' >Second </option>
                        <option value='third' >Third </option>
                        <option value='fourth' >Fourth </option>
                        <option value='fifth' >Fifth </option>
                        <option value='sixth' >Sixth </option>
                        <option value='seventh' >Seventh </option>
                        <option value='eight' >Eight </option>
                    </select>
                </div>

                <div className='w-full px-10 space-y-2 '>
                    <h1 className='text-lg font-semibold'> Select Subject</h1>
                    <select value={subject} type='text' placeholder='Add Subject name' className='w-full py-1 px-3 outline-none text-lg border rounded-md ' onChange={(e) => setSubject(e.target.value)}>
                        <option value='' disabled selected>Select Subject</option>
                        {getsemester.map((data, index) => (
                            <div key={index} className='flex flex-col gap-3'>
                                {data.subject.map((subject, index) => (

                                    <option key={index} value={subject}  >{subject} </option>
                                ))}



                            </div>

                        ))}

                    </select>
                </div>
                <div className='w-full px-10 space-y-2 '>
                    <h1 className='text-lg font-semibold'>Upload Question File</h1>
                    <input type='file' className='w-full py-1 px-3 outline-none text-lg border rounded-md ' onChange={(e) => setFile(e.target.files[0])}>

                    </input>
                </div>

            </div>
            <div className='flex items-end justify-end px-10 py-3' onClick={handleradd}>
                <button className='bg-slate-800 hover:bg-slate-600 font-semibold text-white py-2 rounded-md px-5'>Add </button>
            </div>



        </div>
    )
}
