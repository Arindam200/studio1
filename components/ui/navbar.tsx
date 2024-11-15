'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import  Navbar2  from './acc-navbar'
// import { SideMenuBtn } from './cross'
// import { is } from '@react-three/fiber/dist/declarations/src/core/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-2 z-50 w-full overflow-x-hidden">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        {!isScrolled && (
          <Link href="/" className="flex items-center space-x-2">
          <img src='https://pbs.twimg.com/profile_images/1816112344445116421/TLDdAxAY_400x400.jpg' className="h-14 w-14 max-md:h-10 max-md:w-10 fill-primary text-primary rounded-full" />
          <span className="text-xl font-bold max-sm:hidden sm:visible">Studio1HQ</span>
        </Link>)
          }
          
          <div className="hidden md:flex">
            <Navbar2 />
          </div>
        {
          isScrolled && (
            <Navbar2 />
          )
        }        
        {!isScrolled && (
          <button className=" shadow-[0_4px_14px_0_rgb(0,0,0,10%)] flex text-lg  max-md:text-sm font-semibold max-md:font-light hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2.5 max-md:px-4 max-md:py-1.5 bg-[#fff] text-[#696969] rounded-md transition duration-200 ease-linear">
          Contact Us
        </button>)
          }
        {/* <div className="md:hidden">
          <SideMenuBtn />
        </div> */}
      </div>
    </header>
  )
}