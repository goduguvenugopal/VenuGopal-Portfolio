import React from 'react';
import { skills } from './data';
import { motion } from 'framer-motion';
import Certifications from './Certifications';

const Skills = () => {

 
  return (
    <>

      <main className="p-3 mt-20 border-t-1 pt-18 text-center select-none">
        <h5 className="text-3xl mb-3 text-white font-medium">Skills</h5>
        <p className="text-[#9ea2a3] text-[1.1rem]">
          Here are some of my skills on which I have been working on for the past year.
        </p>

        {/* skills cards */}
        <section className="flex justify-center gap-10 flex-wrap mt-10">
          {skills.map((title, index) => (
            <motion.div
              key={index}
              className="border text-center w-[90%] lg:w-[45%] shadow-sm shadow-purple-700 p-6 pb-8 rounded-2xl border-purple-700"
              initial={{ y: 50, scale: 0.8, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false }}
            >
              <h5 className="mb-8 font-medium text-2xl text-[#e0e3e3]">{title.title}</h5>
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {title.skills.map((skill, index1) => (
                  <div
                    className="border flex justify-center px-5 py-2 items-center gap-2 border-gray-400 bcgc rounded-3xl"
                    key={index1}
                  >
                    <img src={skill.image} alt={skill.name} className="w-7 h-7 rounded-full" />
                    <h5 className="text-[#9ea2a3] font-medium text-[1rem]">{skill.name}</h5>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </main>
      <Certifications />
    </>
  );
};

export default Skills;
