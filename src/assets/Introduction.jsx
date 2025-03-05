import React from 'react'
import { bioData } from './data'

const Introduction = () => {
  return (
    <>
      <main className='p-3 w-full flex  justify-around flex-wrap mt-[3rem] gap-5'>

        {/* image card  */}
        <div className='w-full order-1 lg:order-2 lg:w-[30%] lg:h-[50vh] p-2'>
          <img src="/venugopal.jpg" alt="venugopal-image" className='rounded-full w-full h-fit' />
        </div>

        {/* bio data and description section */}
        <div className='w-full lg:w-[50%] order-1 lg:order-1 p-2 text-center lg:text-start  '>
          <h6 className='text-4xl text-white flex flex-col gap-3 font-medium'>
            Hi, I am
            <span>
              {bioData.name}
            </span>

          </h6>
          <h5 className='text-white text-2xl my-4'>I am a <span>Fullstack developer</span></h5>
          <p className='text-[#9ea2a3] text-[1.2rem]'>{bioData.description}</p>
          <button className='rounded-full text-[1.2rem] h-[3rem] mt-5 text-white font-medium bg-gradient-to-r from-pink-500 w-[60%] to-purple-600 '><a href={bioData.resume}>View Resume</a></button>
        </div>

      </main>

    </>
  )
}

export default Introduction