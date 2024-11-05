import React,{useState} from 'react'
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import Confetti from "react-dom-confetti";
function Contact() {
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
      <section id="contact" className="pt-28 bg-[#e3f2fd]">
            <h1
              className="text-xl lg:text-2xl font-bold text-center text-gray-900"
              data-aos="fade-up"
            >{`Get in Touch`}</h1>
            <div className="flex justify-center">
              <div
                className="bg-[#6C63FF] w-[150px] lg:w-[180px] rounded-lg h-[4px] lg:h-[5px] mt-3"
                data-aos="fade-up"
                data-aos-delay="400"
              ></div>
            </div>
            <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
              <div className="flex flex-col justify-between">
                <div>
                  <div>
                    <h2
                      className="text-xl md:text-2xl font-bold mt-10"
                      data-aos="fade-right"
                    >
                      <FaDiscord className="fill-indigo-500 inline-block" />{" "}
                      Discord
                    </h2>
                    <div
                      className="bg-[#6C63FF] w-[120px] md:w-[130px] rounded-lg h-[4px] lg:h-[5px] my-3"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></div>

                    <ul className="list-disc ml-5 mt-1">
                      <li className='md:text-lg'>{`yaswanth2819`}</li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="text-xl lg:text-2xl items-center font-bold mt-10"
                      data-aos="fade-right"
                    >
                      <FaEnvelope className="fill-indigo-500  inline-block" />{" "}
                      Email
                    </h2>
                    <div
                      className="bg-[#6C63FF] w-[130px] rounded-lg h-[4px] lg:h-[5px] my-3"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></div>

                    <ul className="list-disc ml-5 mt-1 text-sm md:text-md">
                      <li>
                        <a
                          href="mailto:yaswanthullingala@gmail.com"
                          className="hover:text-indigo-500 md:text-lg"
                        >
                          yaswanthullingala@gmail.com
                        </a>{" "}
                        (main)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <form id="contactForm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="uppercase text-sm font-semibold">Name</span>
                      <input
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="your name"
                        name="from"
                        required
                      />
                    </div>
                    <div>
                      <span className="uppercase text-sm font-semibold">Email</span>
                      <input
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="your@email.com"
                        name="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <span className="uppercase text-sm font-semibold">Message</span>
                    <textarea
                      className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder="type something... has 1024 max length..."
                      name="msg"
                      maxLength={1024}
                      required
                    ></textarea>
                  </div>
                  <div className="mt-8">
                    <button
                      className="uppercase text-sm font-bold  bg-blue-700 w-full text-white px-5 py-3 rounded-xl"
                      id="contactFormSubmit"
                      type="submit"
                    >
                      Send Message
                    </button>
                    <div className="flex justify-center">
                      <Confetti  />
                    </div>
                  </div>
                </form>
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

export default Contact