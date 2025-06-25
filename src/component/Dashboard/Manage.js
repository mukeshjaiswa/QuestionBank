import React from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { useEffect } from 'react';
import Left from './Left'
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Manage() {
    const { id } = useParams()
    const navigate = useNavigate();
    const questiontype = 'objective';
    const [getquestion, setQuestion] = useState([]);
    const logouthandler = () => {
        navigate('/admin')
    }
    const semester = id;
    const entrance = "Entrance"

    const API_URL = 'http://127.0.0.1:8000';
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

    useEffect(() => {
        fetchData();
    }, [semester, questiontype]);


    const handlerdelete = async (questionid) => {
        // console.log(id)

        try {
            const respone = await fetch(`${API_URL}/delete/${questionid}`, {
                method: 'DELETE'
            })
            if (respone.ok) {
                toast.success("Sucessfull delete question")
                setQuestion(prev => prev.filter(item => item.file_id !== questionid));

            }
            else {
                toast.error("Failed to delete question");
                console.error("Server error:", await respone.text());
            }

        } catch (error) {
            console.log(error, "error")

        }

    }
    console.log(getquestion)
    return (
        <div >
            <div className='w-full  bg-slate-800   flex items-center justify-center'>
                <div className='w-[90%] flex items-center justify-center'>
                    <h1 className='text-white text-xl font-semibold py-3 px-5'>Admin Dashboard</h1>
                </div>
                <div className='w-[10%] flex items-end justify-end px-10'>
                    <h1 onClick={logouthandler} className='text-red-500 font-sans hover:text-red-600 cursor-pointer'>Logout</h1></div>
            </div>
            <div className='w-full flex justify-between gap-3 '>
                <Left />
                <div className='w-[900px]  ml-[350px]  p-5  '>
                    <h1 className='w-full text-center text-xl font-semibold'>{id} semester {questiontype} Question</h1>
                    <div className='mt-10'>
                       
                        <table className="min-w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
    <thead className="bg-gray-100 text-gray-700 text-left">
        <tr>
            <th className="px-4 py-2 border-b">SN</th>
            <th className="px-4 py-2 border-b">Subject Name</th>
            <th className="px-4 py-2 border-b">Semester</th>
            <th className="px-4 py-2 border-b">Question</th>
            <th className="px-4 py-2 border-b">Action</th>
        </tr>
    </thead>
    <tbody className="text-gray-800">
        {getquestion.length < 1 ? (
            <tr>
                <td colSpan="5" className="text-center py-4 text-lg text-gray-500">
                    No Data Found
                </td>
            </tr>
        ) : (
            getquestion.map((items, index) => (
                <tr key={items.file_id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{items.subject}</td>
                    <td className="px-4 py-2 border-b">{items.semester}</td>
                    <td className="px-4 py-2 border-b">{items.filename}</td>
                    <td
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handlerdelete(items.file_id)}
                    >
                        Delete
                    </td>
                </tr>
            ))
        )}
    </tbody>
</table>

                        <Link to='/dashboard'>
                            <button className='py-1 px-2 bg-black text-white m-4 rounded-md hover:bg-white hover:border hover:text-black'>Add Question</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
