import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { semestersubject } from '../Home/Homepostdata';

export default function Right() {
    const [semester, setSemester] = useState('');
    const [subject, setSubject] = useState('');
    const [years, setYears] = useState('')
    const [questiontype, setQuestiontype] = useState('');
    const [file, setFile] = useState(null);
    const [getsemester, setGetsemester] = useState([]);
    const fileInputRef = useRef(null);
    const [entrancequestion, setEntranceQuestion] = useState(false)


    const API_URL = 'http://127.0.0.1:8000';

    const handleradd = async () => {
        if (questiontype === 'entrance') {

        }
        else {
            if (!semester || !subject || !file || !questiontype) {
                toast.warn("Please enter all fields");
                return;
            }

            const formData = new FormData();
            formData.append("file", file);
            formData.append("subject", subject);
            formData.append("semester", semester);
            formData.append("questiontype", questiontype);

            try {
                const response = await fetch(`${API_URL}/upload/`, {
                    method: "POST",
                    body: formData,
                });
                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.detail || "Upload failed");
                }
                setSemester('')
                setSubject('')
                setQuestiontype('')
                setFile(null);
                fileInputRef.current.value = '';
                const result = await response.json();
                toast.success("Question uploaded successfully!");
            } catch (error) {
                console.error("Upload error:", error);
                toast.error("Failed to upload question");
            }
        }

    };

    useEffect(() => {
        const matchsemester = semestersubject.filter((items) => items.semester === semester);
        setGetsemester(matchsemester);
    }, [semester]);

    useEffect(() => {
        if (questiontype === 'entrance') {
            setEntranceQuestion(true)
        }
        else {
            setEntranceQuestion(false)
        }
    })

    return (
        <div className='w-[900px] ml-[350px] p-5'>
            <h1 className='w-full text-center text-xl font-semibold'>Add Question</h1>

            <div className='w-full flex flex-col mt-5 items-center space-y-3'>
                <div className='w-full px-10 space-y-2'>
                    <h1 className='text-lg font-semibold'>Select Question Types</h1>

                    <select
                        value={questiontype}
                        className='w-full py-1 px-3 outline-none text-lg border rounded-md'
                        onChange={(e) => setQuestiontype(e.target.value)}
                    >
                        <option value="" disabled selected>
                            Select question type
                        </option>
                        <option value="mcq">MCQ Question</option>
                        <option value="objective">Objective Question</option>
                        <option value="entrance">Entrance Question</option>

                    </select>
                </div>
                {!entrancequestion ? (
                    <div className='w-full'>
                        <div className='w-full px-10 space-y-2'>
                            <h1 className='text-lg font-semibold'>Select semester</h1>
                            <select
                                value={semester}
                                className='w-full py-1 px-3 outline-none text-lg border rounded-md'
                                onChange={(e) => setSemester(e.target.value)}
                            >
                                <option value='' selected disabled>Select semester</option>
                                <option value='first'>First</option>
                                <option value='second'>Second</option>
                                <option value='third'>Third</option>
                                <option value='fourth'>Fourth</option>
                                <option value='fifth'>Fifth</option>
                                <option value='sixth'>Sixth</option>
                                <option value='seventh'>Seventh</option>
                                <option value='eight'>Eight</option>
                            </select>
                        </div>

                        <div className='w-full px-10 space-y-2'>
                            <h1 className='text-lg font-semibold'>Select Subject</h1>
                            <select
                                value={subject}
                                className='w-full py-1 px-3 outline-none text-lg border rounded-md'
                                onChange={(e) => setSubject(e.target.value)}
                            >
                                <option value='' selected disabled>Select Subject</option>
                                {getsemester.map((data, index) => (
                                    <div key={index}>
                                        {data.subject.map((subjectItem, idx) => (
                                            <option key={idx} value={subjectItem}>
                                                {subjectItem}
                                            </option>
                                        ))}
                                    </div >
                                ))}
                            </select>
                        </div>

                        <div className='w-full px-10 space-y-2'>
                            <h1 className='text-lg font-semibold'>Upload Question File</h1>
                            <input
                                type='file'
                                ref={fileInputRef}
                                className='w-full py-1 px-3 outline-none text-lg border rounded-md'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                ) :
                    // {if question type is entrance then these is open}
                    <div className='w-full'>
                        <div className='w-full px-10 space-y-2'>
                            <h1 className='text-lg font-semibold'>Entrance Year Question</h1>
                            <input
                                type='text'
                                value={years}
                                className='w-full py-1 px-3 outline-none text-lg border rounded-md'
                                onChange={(e) => setYears(e.target.value)}
                                placeholder="Enter entrance year question"
                            >
                            </input>
                        </div>
                        <div className='w-full px-10 mt-2  space-y-2'>
                            <h1 className='text-lg font-semibold'>Upload Question File</h1>
                            <input
                                type='file'
                                ref={fileInputRef}
                                className='w-full py-1 px-3 outline-none text-lg border rounded-md'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>

                    </div>}

            </div>

            <div className='flex items-end justify-end px-10 py-3'>
                <button
                    className='bg-slate-800 hover:bg-slate-600 font-semibold text-white py-2 rounded-md px-5'
                    onClick={handleradd}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
