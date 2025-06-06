import { motion } from 'framer-motion'
import React from 'react'
import { certification } from './data'
import { TbExternalLink } from 'react-icons/tb'



const Certifications = () => {
  return (
    <>
    <main className="p-3 mt-20 border-t-1 pt-18 text-center">
      <h5 className="text-3xl mb-3 text-white font-medium">Certifications</h5>
      <div className='flex justify-center w-full'>
        <p className="text-[#9ea2a3] text-[1.1rem] text-center lg:w-[60%]">
        My learning journey has been one of growth and self-discovery, fueled by a passion for technology. These certifications reflect my commitment to continuous learning, skill enhancement, and adaptability to evolving industry standards.
        </p>
      </div>

      {/* education cards section  */}

      <section className="flex flex-col items-center gap-5 w-full mt-10">
        { certification.map((item) => (
          <motion.div initial={{ y: 50, scale: 0.8, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false }} key={item.id} className="shadow-sm shadow-purple-800 border border-purple-800  p-4 text-start w-full  bg-gray-900 lg:w-[60%] cursor-pointer  rounded-2xl">
            <div className="flex gap-3 w-full items-cente mb-2">
              <img src={item.img} alt={item.institute} className='w-14 h-11  mt-[0.40rem]  rounded-[0.4rem]' />
              <div className="flex flex-col gap-1 flex-wrap rounded-3xl ">
                <h5 className="text-[#dedede]  capitalize font-medium text-[1.1rem]">{item.institute}</h5>
                {/* <h5 className="text-[#acafb0] capitalize font-medium text-[0.9rem]">
                  {item.}
                </h5> */}
                <h6 className='text-gray-500 capitalize text-start mt-1 font-medium text-[12px]'>{item.duration}</h6>
              </div>
            </div>
            <h6 className='text-gray-500 capitalize  mb-2 font-medium text-sm '>{item.desc}</h6>
            <a href={item.certificate} className='text-gray-300  capitalize text-start mb-3 font-medium text-[14px]'><span className='text-gray-400 font-medium hover:text-blue-500 flex items-center gap-1'><TbExternalLink size={18}/>Certificate</span></a>
     
          </motion.div>
        ))}
      </section>

    </main>
    </>
  )
}

export default Certifications