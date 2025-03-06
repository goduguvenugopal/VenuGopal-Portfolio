import React from 'react'
import { projects } from './data'


const Projects = () => {
  return (
    <>
      <div className="p-3 mt-20 border-t-1 pt-18 text-center">
        <h5 className="text-3xl mb-3 text-white font-medium">Projects</h5>
        <div className='flex justify-center w-full'>
          <p className="text-[#9ea2a3] text-[1.1rem] text-center lg:w-[60%]">
            I have worked on a wide range of projects, focusing on frontend and backend development. From interactive web applications to full-stack solutions, here are some of my projects.
          </p>
        </div>

        {/* skills cards */}
        <div className="flex justify-center gap-10 flex-wrap mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border w-[90%] lg:w-[30%] shadow-sm shadow-purple-700 p-5 rounded-2xl border-purple-700"
            >
              <img src={project.image} alt={project.title} className='w-full rounded-[0.6rem]' />

              <div className="flex mt-4  items-center gap-2 flex-wrap">
                {project.techstack.map((tool, index1) => (
                  <div
                    className=" px-3 py-1 bg-black rounded-3xl"
                    key={index1}
                  >
                    <h5 className="text-[#9ea2a3] font-medium text-[0.8rem]">{tool}</h5>
                  </div>
                ))}
              </div>

              <h5 className='text-gray-200 text-start mt-3 font-medium text-[1.2rem]'>{project.title}</h5>
              <h6 className='text-gray-400 text-start mt-1 font-medium text-[12px]'>{project.date}</h6>
              <p className='text-gray-300 text-start mt-1 font-semibold text-md'>{project.description}</p>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects