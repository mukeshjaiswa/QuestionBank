import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passhide, setPassHide] = useState(false);
  const naviagete=useNavigate();
  const passhidehandler = () => {
    setPassHide(!passhide);
  }
 
  
  const signinhandler = async () => {
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);
  
    try {
      const response = await fetch("http://localhost:8000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success("Login successful!");
        console.log(data);
        naviagete('/dashboard'); // you can redirect here
      } else {
        alert("Login failed: " + data.detail);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.warn("Something went wrong. Check console.");
    }
  };
 

  return (
    <div className='w-full h-[100vh] bg-gray-100 flex flex-col  items-center '>

      <div className='mt-5 mb-10 '>
        <h1 className='text-xl md:text-3xl font-sans'>BCANepal Hub</h1>
      </div>
      <div className=' w-[300px] sm:w-[400px] md:w-[500px] mt-10 h-[300px] bg-white rounded-md flex flex-col items-center'>
        <h1 className='text-2xl mt-5 font-semibold'>Admin Login</h1>
        <div className='flex w-[90%] mt-10 mx-auto gap-1 items-center  '>
          <label htmlFor="" className='font-semibold '>Username</label>
          <input value={username} onChange={(e) => setUserName(e.target.value)} type='email' className='border border-gray-400 w-full p-1 rounded-md ml-1' required placeholder='UserName' />
        </div>
        <div className='flex w-[90%] mt-4 mx-auto gap-1 items-center   '>
          <label htmlFor="" className='font-semibold '>Password</label>
          <div className='w-full relative '>
            <input type={passhide ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-400 w-full pr-10 p-1 rounded-md ml-1 ' placeholder='Password' />
            {passhide ?
              <Eye className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xl' onClick={passhidehandler} />
              : <EyeOff className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xl' onClick={passhidehandler} />
            }
          </div>

        </div>

        <div className=' w-full flex justify-end items-end mr-10 mt-5'>
          <button onClick={signinhandler} className='bg-green-700 text-white p-2 rounded-md px-10 hover:bg-green-600 font-semibold '>Sign in</button>
        </div>

      </div>
      <div className='mt-10'>
        <h1 className='text- text-gray-400'>BCANepalHub</h1>
      </div>
    </div>
  )
}
