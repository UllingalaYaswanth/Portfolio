import React, { Fragment, useState } from 'react'
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { clsx } from "clsx";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import bgimg from '../../public/img/blob/1.svg'
import img from '../../public/img/peep.svg'
function Home() {
let [social] = useState([
    {
    href:"#",
    icon:{
        icon:FaGithub,
        fill: clsx('hover:fill-gray-900')
    }
    },
    {
        href: "#",
        icon: {
          icon: FaLinkedin,
          fill: clsx('hover:fill-blue-900')
        },
      },
      {
        href: "#",
        icon: {
          icon: FaYoutube,
          fill: clsx("hover:fill-red-500"),
        },
      },
      {
        href: "#",
        icon: {
          icon: FaInstagram,
          fill: clsx("hover:fill-pink-400"),
        },
      },
      {
        href: "#",
        icon: {
          icon: FaTwitter,
          fill: clsx('hover:fill-blue-500'),
        },
      },   
])
  return (
    <div>
        <section className='h-[750px] md:flex space-y-14 md:space-y-0 gap-20 items-center p-6 py-40 lg:mt-20 xl:mt-30 transition delay-100 duration-200'>
            <div className='flex mt-10 gap-10 md:gap-20 items-center'>
                <div className='flex flex-col items-center justify-center text-xl md:text-2xl lg:text-3xl text-custom-gray space-y-7'>
                    {
                        social.map(({href,icon}) => {
                            return (
                                <Fragment key={href} >
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                        <icon.icon className={`${icon.fill} transition delay-10`}/>
                                    </a>
                                </Fragment>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col items-left space-y-3'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-custom-blue'>Hi. I am a</h1>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-amatic font-bold text-custom-blue'>Frontend Developer</h1>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-custom-blue'>Yaswanth Ullingala</h1>
                </div>
              
            </div>
            <div className="flex justify-center md:ml-20">
                <img
                    className="z-30"
                    src={img}
                    alt="about me"
                    width={200}
                    height={200}
                    data-aos="fade-up-left"
                />
                <img
                    src={bgimg}
                    className="absolute mt-10 md:mt-16"
                    alt="blob"
                    width={350}
                    height={350}
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                />
                </div>
                {/* <div className='flex justify-center bg-red-200 '>
                <img src='img/profile2.png' className=' md:w-[50%] w-[60%] rounded-[8%]'/>
                </div> */}
        </section>
        <div className='animate-sb pt-10 flex justify-center'>
          <a href='#about'>
            <IoIosArrowDropdownCircle className='scale-[140%] hover:scale-[170%] transition delay-150'/>
          </a>
        </div>
    </div>
  )
}

export default Home