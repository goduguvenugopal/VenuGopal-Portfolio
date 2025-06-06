import React from 'react'
import { projects } from './data'
import { FaGithub } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'


const Projects = () => {
  return (
    <>
      <main className="p-3 mt-20 border-t-1 pt-18 text-center">
        <h5 className="text-3xl mb-3 text-white font-medium">Projects</h5>
        <div className='flex justify-center w-full'>
          <p className="text-[#9ea2a3] text-[1.1rem] text-center lg:w-[60%]">
            I have worked on a wide range of projects, focusing on frontend and backend development. From interactive web applications to full-stack solutions, here are some of my projects.
          </p>
        </div>

        {/* skills cards */}
        <div className="flex justify-center gap-10 flex-wrap mt-10">
          {projects.map((project) => (
            <section  
             
              key={project.id}
              className="border-2 border-blue-900 w-[90%] transition-transform transform duration-500 ease-in-out hover:-translate-y-4 bg-gray-900 lg:w-[30%] cursor-poin shadow-md hover:drop-shadow-lg shadow-gray-900 p-5 rounded-2xl "
            >

              <img src={project.image} alt={project.title} className='w-full rounded-[0.6rem] border  border-gray-500 p-1 outline-red-400' />

              <div className="flex mt-4  items-center gap-2 flex-wrap">
                {project.techstack.map((tool, index1) => (
                  <div
                    className=" px-3 py-1 bg-black rounded-3xl"
                    key={index1}
                  >
                    <h5 className="text-[#9ea2a3] capitalize font-medium text-[0.8rem]">{tool}</h5>
                  </div>
                ))}
              </div>

              <div className='mt-3 flex justify-between items-center'>
                <h5 className='text-gray-200 text-start capitalize  font-medium text-[1.2rem]'>{project.title}</h5>
                <div className='flex text-white gap-4 items-center'>
                  <a href={project.webapp} target='_blank' title='Live Link' className='border border-[#151b23] hover:border-gray-300 p-1 rounded-full'><TbExternalLink size={19} /></a>
                  <a href={project.github} title='GitHub' className='border border-[#151b23] hover:border-gray-300 p-1 rounded-full'><FaGithub size={19} /></a>
                </div>
              </div>
              <h6 className='text-gray-500 capitalize text-start mt-1 font-medium text-[12px]'>{project.date}</h6>
              <h6 className='text-gray-400  mt-1 text-md text-start'>{project.description}</h6>

            </section>
          )).reverse()}
        </div>
      </main>
    </>
  )
}

export default Projects