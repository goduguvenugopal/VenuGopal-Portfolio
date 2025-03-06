import React, { useEffect, useState } from 'react'
import { bioData } from './data'
 

const Introduction = () => {
  const [roles, setRoles] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoles((prev) => (prev + 1 === bioData.roles.length ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main   className='p-3 w-full flex  justify-around flex-wrap mt-[3rem] gap-5'>
        {/* image card  */}
       
        <div className='w-full order-1 lg:order-2 lg:w-[30%] lg:h-[50vh] p-2'>
          <img src="/venugopal.jpg" alt="venugopal-image" className='border-2 border-purple-500 rounded-full w-full h-fit' />
        </div>

        {/* bio data and description section */}
        <div className='w-full lg:w-[50%] order-1 lg:order-1 p-2 text-center lg:text-start  '>
          <h6 className='text-4xl text-white flex flex-col gap-3 font-medium'>
            Hi, I am
            <span>
              {bioData.name}
            </span>

          </h6>
          <h5 className='text-white text-2xl lg:text-3xl my-4 font-medium'>I am a <span className='text-purple-600'>{bioData.roles[roles]}</span></h5>
          <p className='text-[#9ea2a3]  text-[1.11rem]'>{bioData.description}</p>
          <a className='cursor-pointer ' href={bioData.resume}><button className='rounded-full cursor-pointer text-[1.2rem] h-[3rem] mt-5 text-white font-medium bg-gradient-to-r from-pink-500 w-[60%] to-purple-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>View Resume</button>
          </a>
        </div>

      </main>

    </>
  )
}

export default Introduction