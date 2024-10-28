import React, { useState } from 'react';
import { IoIosPaperPlane, IoMdHome, IoMdPerson } from "react-icons/io";
import { MdCode } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-40 py-7 border-b px-4 bg-white shadow'>
            <div className='max-w-7xl mx-auto flex justify-between'>
                <a href='/'>
                    <h1 className='group text-2xl font-bold font-be-vietnam'>
                        <span>Y</span>
                        <span className="group-hover:text-indigo-500 transition ease-in-out delay-100">U</span>
                        <span className="text-indigo-600">.</span>    
                    </h1>
                </a>
                <div className='space-x-14 font-semibold text-gray-600 lg:text-lg flex items-center hidden md:flex'>
                    <a href='/home' className='hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-100'>
                        <IoMdHome />
                        <h1>Home</h1>
                    </a>
                    <a href='#about' className='hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-100'>
                        <IoMdPerson />
                        <h1>About</h1>
                    </a>
                    <a href='#' className='hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-100'>
                        <MdCode />
                        <h1>Projects</h1>
                    </a>
                    <a href='#' className='hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-100'>
                        <IoIosPaperPlane />
                        <h1>Contact</h1>
                    </a>
                </div>
                <div className='md:hidden flex items-center text-gray-600' onClick={toggleMenu}>
                    {open ? (
                        <IoMdClose aria-label="Close menu" className='w-10 h-10 bg-gray-100 p-2 rounded-[50%] transition duration-300 delay-150' />
                    ) : (
                        <IoMdMenu aria-label="Open menu" className='w-10 h-10 bg-gray-100 p-2 rounded-[50%] transition duration-300 delay-150' />
                    )}
                </div>
            </div>
            {open && (
                <div className='lg:hidden mt-4 font-semibold text-gray-600 text-lg'>
                    <a href='#' className='block py-2 hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-150'>
                        <IoMdHome /> Home
                    </a>
                    <a href='#' className='block py-2 hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-150'>
                        <IoMdPerson /> About
                    </a>
                    <a href='#' className='block py-2 hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-150'>
                        <MdCode /> Projects
                    </a>
                    <a href='#' className='block py-2 hover:text-indigo-700 flex items-center gap-1 transition duration-300 delay-150'>
                        <IoIosPaperPlane /> Contact
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;
