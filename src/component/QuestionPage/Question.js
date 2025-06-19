import React from 'react'
import Banner from '../Bannersection/Banner'
import Navbar from '../Layout/Navbar/Navbar'
import { Search } from 'lucide-react'
import { data } from '../Home/Homepostdata'
import { Link, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import Footer from '../Layout/Footer/Footer'


export default function Question() {
  const naviage = useNavigate();
  const [filtervalue, setFilter] = useState('')
  const [filterdata, setFilterdata] = useState(null)
  // const [searchdata, setSearchdata] = useState(null)
  const [search, setSearch] = useState('')

  
  const handlersearch = () => {
    if (search !== '') {
      const results = data.filter((item) => item.semester.toLowerCase() === search.toLowerCase() ||
        item.year.toLowerCase().includes(search))
      setFilterdata(results)
      
    }
  }


  const viewquestion = (year, semester) => {
    naviage(`/question/${year}`, {
      state: { semester }
    })
  }
  console.log(filterdata)
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };


  return (
    <div>
      <Navbar />
      <Banner />
      {/* {search section} */}

      <div className='w-[80%] m-auto mt-10 mb-10 flex flex-col sm:flex-row items-center justify-center   gap-4'>
        <div className='w-full  flex border relative rounded-md'>
          <input value={search} type='text' className='w-full  outline-none rounded-md p-2 text-xl' placeholder=' search semester question  ' onChange={(e) => setSearch(e.target.value)} />
          <button type='search' className='bg-red-600  hover:bg-red-500 rounded-r-md px-5 py-2.5 absolute right-0'>
            <Search className='text-white ' onClick={handlersearch} />
          </button>
        </div>
       
      </div>
      {/* {question section} */}
      <div className='w-[90%] m-auto mt-10 '>
        <h1 className='text-3xl font-semibold'>{filterdata ? `${filterdata.map((item) => capitalizeFirstLetter(item.semester)).join(', ')} Semester Old`  : 'Latest'}  Question</h1>
        {filterdata && filterdata.length < 1 && (
          <div className='w-full flex mt-10 rounded-md items-center justify-center p-2 bg-white'>
            <h1 className='text-2xl'>Not found   semester</h1></div>
        )}
        {!filterdata ?
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-3 '>
            {data.map((item, index) => (
              <div  key={index} className=' mt-5 bg-white border rounded-md cursor-pointer' onClick={() => viewquestion(item.year, item.semester)}>
                <div className='w-full'>
                  <img src={item.image} alt="" className='rounded-t-md' />
                </div>
                <div className=' p-2'>
                  <button  className='text-xl hover:text-blue-600 cursor-pointer'>{capitalizeFirstLetter(item.semester)} semester old  question </button>
                </div>
              </div>
            ))}
          </div>
          :
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-3'>
            {filterdata.map((item, index) => (
              <div key={index} className=' mt-5 border rounded-md cursor-pointer' onClick={() => viewquestion(item.year, item.semester)}>
                <div className='w-full'>
                  <img src={item.image} alt="" className='rounded-t-md' />
                </div>
                <div className='py-3 px-2'>
                  <button  className='text-xl hover:text-blue-600 cursor-pointer'>{capitalizeFirstLetter(item.semester)} semester old  question </button>
                </div>
              </div>
            ))}
          </div>
        }


      </div>
      <Footer />
    </div>

  )
}
