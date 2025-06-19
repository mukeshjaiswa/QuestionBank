import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect } from 'react';

export default function Right() {
    const [semester, setSemester] = useState('');
    const [subject, setSubject] = useState('');
    const [file, setFile] = useState(null);
    const [getpdf, setGetpdf] = useState([])

    const handleradd = async () => {
        if (!semester || !subject || !file) {
            toast.warn("Please enter all fields")
        }
        else {

            try {
                const storage = getStorage();
                const fileRef = ref(storage, `questions/${Date.now()}_${file.name}`);

                await uploadBytes(fileRef, file);
                const downloadURL = await getDownloadURL(fileRef);

                const data = {
                    semester,
                    subject,
                    question: downloadURL,
                    filename: file.name,
                    createdAt: new Date()
                };
                await addDoc(collection(db, 'question'), data);

                toast.success("Add sucessfully")
                setFile(null)
                setSemester('')
                setSubject('')
            } catch (error) {
                toast.error("Not added: " + error.message)


            }


        }

    }
    useEffect(() => {
        const fetchdata = async () => {
            const getdata = collection(db, 'question');
            const snapshot = await getDocs(getdata);
            const dataList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setGetpdf(dataList)
            console.log(dataList)
        }
        fetchdata();
    }, []);

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
                    <h1 className='text-lg font-semibold'>Subject</h1>
                    <input value={subject} type='text' placeholder='Add Subject name' className='w-full py-1 px-3 outline-none text-lg border rounded-md ' onChange={(e) => setSubject(e.target.value)}>

                    </input>
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
