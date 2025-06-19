import React from 'react'
import profileimage from '../../assest/mukesh.jpg'
import profileimage2 from '../../assest/dipesh.jpg'
import { Link } from 'lucide-react'

export default function Developer() {
    return (
        <div>
            <div className='w-full flex items-center justify-center mt-10'>

                <h1 className='text-3xl font-semibold'>Developed  By:</h1>
            </div>
            <div className='w-[80%]  m-auto grid md:grid-cols-2 items-center justify-center mt-10 gap-4'>
                
                {developer.map((data, index) => (
                    <div key={index} className=' rounded-md px- py-2 bg-white shadow-xl  mb-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <img src={data.image} alt="" className='w-[60px] h-[60px] rounded-full' />
                            <div>
                                <h1 className='text-xl font-semibold'>{data.name}</h1>
                                <a href={`mailto:${data.email}`} className='text-md font-normal text-gray-600 hover:underline'>{data.email}</a>
                            </div>
                        </div>
                        <div className='mb-5 mt-5'>
                            <p className='px-10 text-gray-500'>{data.description}</p>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}
export const developer = [
    {
        name: 'Mukesh Jaiswal',
        image: profileimage,
        description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti delectus dolores sit velit sed quae, qui animi. Autem, facere veniam.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti delectus dolores sit velit sed quae, qui animi. Autem, facere veniam.',
        email: '1736mukesh@gmail.com'
    },
    {
        name: 'Dipesh Thakur',
        image: profileimage2,
        description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti delectus dolores sit velit sed quae, qui animi. Autem, facere veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti delectus dolores sit velit sed quae, qui animi. Autem, facere veniam.',
        email: 'princeaaryan06@gmail.com'
    }
]
