import React from 'react'
import { FaCode, FaHeart } from "react-icons/fa"
import Logo from '../components/Logo'

function Footer() {
  return (
    <footer className=' max-w-7xl mx-auto'>
      <div className='border-t-2 py-10'>
      <div className="footer p-10">
        <div>
          <p className='flex items-center gap-1 mb-2'>
            <FaCode className="fill-indigo-500 w-5 hover:scale-110 transition delay-75 inline-block" />
            {` with `}
            <FaHeart className="fill-error text-red-500 w-5 hover:scale-110 transition delay-75 inline-block" />{" "}
            by{" "}  
            <Logo/>
           
          </p>
          &copy; {new Date().getFullYear()} Copyright Yaswanth 
        </div>
        <div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer