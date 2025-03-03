import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { bioData } from './data'
import { MdClose } from 'react-icons/md'


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [barIcon, setBarIcon] = useState(false)



  return (
    <>
      <div className='shadow-lg p-2 relative'>
        {/* large device navbar section  */}
        <div className='flex lg:justify-around lg:items-center'>
          <img src="/logo.jpeg" alt="logo.jpeg" className='ml-1   rounded-full  w-[4rem] h-[4rem]' />
          <div className=' gap-3 hidden lg:block'>
            <div className='flex gap-[3rem]'>
              <a href='' className='text-[1.2rem] text-white font-semibold'>About</a>
              <a href='' className='text-[1.2rem] text-white font-semibold'>Skills</a>
              <a href='' className='text-[1.2rem] text-white font-semibold'>Projects</a>
              <a href='' className='text-[1.2rem] text-white font-semibold'>Education</a>
              <a href='' className='text-[1.2rem] text-white font-semibold'>Contact</a>
            </div>
          </div>
          <div>
            <button className='hidden lg:block cursor-pointer  animate-pulse hover:bg-purple-700 bg-purple-600 text-white font-medium rounded-[3rem] px-4 py-2'><a href={bioData.github} target='_self'>GitHub Profile</a></button>
          </div>
        </div>

        {/* mobile navbar section  */}
        <div className='flex mt-3 lg:hidden flex-col gap-4 px-2 pb-2'>
          <a href='' className='text-[1.2rem] text-white font-semibold'>About</a>
          <a href='' className='text-[1.2rem] text-white font-semibold'>Skills</a>
          <a href='' className='text-[1.2rem] text-white font-semibold'>Projects</a>
          <a href='' className='text-[1.2rem] text-white font-semibold'>Education</a>
          <a href='' className='text-[1.2rem] text-white font-semibold'>Contact</a>
          <button className='w-fit cursor-pointer  animate-pulse hover:bg-purple-700 bg-purple-600 text-white font-medium rounded-[3rem] px-4 py-2'><a href={bioData.github} target='_self'>GitHub Profile</a></button>

        </div>


        {/*menu bar icon div  */}
        <div className='lg:hidden '>
          {barIcon
            ?
            <span className='text-white absolute top-[1.3rem] right-[2rem] cursor-pointer'>
              <MdClose size={25} />
            </span> :
              <span onClick={() => setBarIcon(true)} className='text-white  absolute top-[1.3rem] right-[2rem] cursor-pointer'>
              <FaBars size={22} />
            </span>
          }

        </div>

      </div>
    </>
  )
}

export default Navbar