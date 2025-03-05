import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { bioData } from './data'
import { MdClose } from 'react-icons/md'
import Introduction from "./Introduction"
import Skills from './Skills'
import Projects from "./Projects"


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)
  const [navVisible, setNavVisible] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)


  // menu open when clicks on bar 
  const menuOpenFunction = () => {
    setMenu(true)
  }

  const menuCloseFunction = () => {
    setMenu(false)
  }


  // menu closes when clicks outside the navbar
  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false)
      }
    }
    document.addEventListener("mousedown", closeMenu)
    return () => {
      document.removeEventListener("mousedown", closeMenu)
    }

  }, [])


  // menu closes and opens according to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setNavVisible(false)
        setMenu(false)
      } else {
        setNavVisible(true)
        setMenu(false)

      }
      setLastScroll(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScroll])

  return (
    <>
      <div className={`sticky left-0 top-0 w-full bcgc transition-transform duration-300 ${navVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className={` lg:shadow-lg p-2 select-none relative ${menu ? "shadow-none" : "shadow-lg"}`}>
          {/* large device navbar section  */}
          <div className='flex lg:justify-around lg:items-center'>
            <img src="/logo.jpeg" alt="logo.jpeg" className='ml-1 border-[0.1rem] border-purple-600 rounded-full  w-[3.6rem] h-[3.6rem]' />
            <div className=' gap-3 hidden lg:block'>
              <div className='flex gap-[3rem]'>
                <a href='#about' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>About</a>
                <a href='#skills' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Skills</a>
                <a href='#projects' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Projects</a>
                <a href='#education' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Education</a>
                <a href='#contact' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Contact</a>
              </div>
            </div>
            <div>
              <button className='hidden lg:block cursor-pointer  animate-pulse hover:bg-purple-700 bg-purple-600 text-white font-medium rounded-[3rem] px-4 py-2'><a href={bioData.github} target='_self'>GitHub Profile</a></button>
            </div>
          </div>

          {/* mobile navbar section  */}
          <div
            ref={menuRef}
            className={`absolute  bcgc top-[3.8rem] shadow-lg left-0 w-full flex mt-3 lg:hidden flex-col gap-4 pl-4 pt-2 transition-all duration-500 ease-in-out transform origin-top 
    ${menu ? "scale-y-100 opacity-100 pb-4" : "scale-y-0 opacity-0 h-0 overflow-hidden"}`}>

            <a href='#about' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>About</a>
            <a href='#skills' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Skills</a>
            <a href='#projects' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Projects</a>
            <a href='#education' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Education</a>
            <a href='#contact' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Contact</a>
            <button className='w-fit cursor-pointer animate-pulse hover:bg-purple-700 bg-purple-600 text-white font-medium rounded-[3rem] px-4 py-2'>
              <a href={bioData.github} target='_self'>GitHub Profile</a>
            </button>

          </div>

          {/*menu bar icon div  */}
          <div className='lg:hidden '>
            {menu
              ?
              <span onClick={menuCloseFunction} className='text-white absolute top-[1.6rem] right-[0.8rem] cursor-pointer'>
                <MdClose size={25} />
              </span> :
              <span onClick={menuOpenFunction} className='text-white  absolute top-[1.6rem] right-[0.8rem] cursor-pointer'>
                <FaBars size={22} />
              </span>
            }

          </div>

        </div>
      </div>

      {/* other components  */}
      <div id="about" >
        <Introduction />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

    </>
  )
}

export default Navbar