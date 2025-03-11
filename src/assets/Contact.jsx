import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6'
import { bioData } from './data'

const Contact = () => {
  return (
    <footer className="p-3 mt-20 border-t-1 pt-18 text-center">
      <h5 className="text-3xl mb-3 text-white font-medium">Contact</h5>
      <div className='flex justify-center w-full'>
        <p className="text-[#9ea2a3] text-[1.1rem] text-center lg:w-[60%]">
          Feel free to reach out for any inquiries or potential collaborations! I'm here to assist and explore exciting opportunities with you.
        </p>
      </div>

      {/* email form section  */}
      <section className="text-gray-400 body-font text-start relative">
        <div className="container px-5 py-5 pt-14 mx-auto">

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 ">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-10   mb-2  text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#151b23]   bg-opacity-50 rounded-3xl border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-10   mb-2  text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#151b23]   bg-opacity-50 rounded-3xl border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-10   mb-2  text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-[#151b23]  pl-4 bg-opacity-50 rounded-2xl border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full flex justify-center pt-5">
                <button className="flex justify-center font-medium cursor-pointer text-white bg-gradient-to-r from-indigo-500 to-purple-500 border-0 py-2 px-2 w-[50%] text-center focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-7 border-t border-gray-200 text-center">
                <h5 className="text-indigo-500 text-[1.1rem]">Godugu Venu Gopal</h5>

                <div className='flex justify-center gap-[0.8rem] lg:gap-5 mt-5'>
                  <a href='#about' className='text-md lg:text-[1.2rem] text-white font-semibold hover:text-blue-500'>About</a>
                  <a href='#skills' className='text-md lg:text-[1.2rem] text-white font-semibold hover:text-blue-500'>Skills</a>
                  <a href='#projects' className='text-md lg:text-[1.2rem] text-white font-semibold hover:text-blue-500'>Projects</a>
                  <a href='#education' className='text-md lg:text-[1.2rem] text-white font-semibold hover:text-blue-500'>Education</a>
                  <a href='#contact' className='text-sm lg:text-[1.2rem] text-white font-semibold hover:text-blue-500'>Contact</a>
                </div>
                <nav className="inline-flex my-6">
                  <a className="text-gray-200 " href={bioData.twitter}>
                    <FaX size={19} className='cursor-pointer hover:text-purple-500' />
                  </a>
                  <a className="ml-4 text-gray-200" href={bioData.linkedin}>
                    <FaLinkedin size={19} className='cursor-pointer hover:text-purple-500'/>
                  </a>
                  <a className="ml-4 text-gray-200" href={bioData.instagram}>
                    <FaInstagram size={19} className='cursor-pointer hover:text-purple-500'/>
                  </a>
                  <a className="ml-4 text-gray-200" href={bioData.github}>
                    <FaGithub size={19} className='cursor-pointer hover:text-purple-500' />
                  </a>
                </nav>
                <p>© 2025 Godugu Venu Gopal. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </footer>
  )
}

export default Contact