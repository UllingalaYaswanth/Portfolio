import React from 'react'
import { MdCode } from "react-icons/md";
import bgimg from '../../public/img/blob/2.svg'
import img from '../../public/img/about.svg'
function About() {
  return (
    <div className='w-full'>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
        <section className='bg-[#e3f2fd] px-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 py-20">
                <div className="flex justify-center md:mb-0 mb-20 py-5">
                <img
                    className="z-30"
                    src={img}
                    alt="about me"
                    width={200}
                    height={200}
                    data-aos="fade-up-right"
                />
                <img
                    src={bgimg}
                    className="absolute mt-10 md:mt-16"
                    alt="blob"
                    width={350}
                    height={350}
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                />
                </div>
                <div className="ml-5 mr-2 lg:mr-20 pt-10 pe-3">
                        <h1 className="text-2xl lg:text-3xl font-bold leading-9" data-aos="fade-up">
                        About Me
                        </h1>
                        <div
                        className="bg-[#6C63FF] w-[150px] h-[5px]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        ></div>
                    
                        <p className="mt-5 text-md lg:text-lg font-be-vietnam">
                        Hi, I’m Yaswanth Ullingala, a passionate Electronics and Communication Engineering graduate turned web developer. With experience in React.js, Tailwind CSS, and JavaScript, I build responsive and user-friendly web applications. My journey from embedded systems and AI to web technologies has sharpened my problem-solving skills and creativity.
                        </p>
                        <p className='mt-5 text-md lg:text-lg font-be-vietnam'>I love tackling new challenges and continuously learning. Feel free to explore my work and reach out for collaboration!</p>
                        <a
                        href="https://www.dropbox.com/scl/fi/x8wq63re50ofmoozp06rv/Yaswanth_Resume.pdf?rlkey=75vubrzymrafpmf9a1xc7lrr6&st=as9ws3u6&dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-40 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded-full flex items-center mt-6 md:mt-9 transition delay-150 duration-200"
                        data-aos="fade-up"
                        >
                            <MdCode className="mr-2" /> My Resume
                        </a>

                    </div>
            </div>
        </section>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            fill="#e3f2fd"
        >
            <path
            fillOpacity={1}
            d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
        </svg>
   </div>
  )
}

export default About