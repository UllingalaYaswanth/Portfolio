import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
  return (
    <div className=''>
      <div className=''>
      <Navbar/>
      </div>
      <section id='home' className='max-w-7xl mx-auto'>
      <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    
    </div>
  )
}

export default App







// import React from "react";

// const experiences = [
//   {
//     role: "Web Developer",
//     company: "Rosys Virtual Solutions",
//     date: "July 2023 – Present",
//     responsibilities: [
//       "Developed multiple responsive websites, ensuring a seamless user experience across devices.",
//       "Collaborated with clients to gather requirements and implement effective web solutions.",
//     ],
//   },
//   {
//     role: "Intern | Embedded Software Engineer",
//     company: "NexSemi Private Ltd",
//     date: "Mar 2022 – Apr 2022",
//     responsibilities: [
//       "Assisted in developing and optimizing embedded software for semiconductor devices.",
//       "Improved performance and reliability of key systems through software enhancements.",
//     ],
//   },
//   {
//     role: "Intern | Drone Technologies",
//     company: "Innovation Center for Drone Technologies",
//     date: "Nov 2022 – Feb 2022",
//     responsibilities: [
//       "Contributed to developing a 10-liter hexacopter drone for agricultural applications.",
//       "Worked on enhancing drone features for more efficient crop monitoring.",
//     ],
//   },
// ];

// function Experience() {
//   return (
//     <section id="experience" className="py-12 bg-gray-100">
//       <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experiences.map((experience, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
//               <h4 className="text-md text-gray-700 mb-2">{experience.company}</h4>
//               <p className="text-sm text-gray-500 mb-4">{experience.date}</p>
//               <ul className="list-disc pl-5 text-gray-700">
//                 {experience.responsibilities.map((task, idx) => (
//                   <li key={idx} className="mb-2">
//                     {task}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;
