import React from 'react';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaDatabase,FaRegFileCode  } from 'react-icons/fa';
import { SiTailwindcss, SiPython, SiMongodb, SiPostman ,SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'ReactJS', icon: <FaReact size={24} className="text-blue-600 group-hover:text-blue-700" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} className="text-blue-400 group-hover:text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs size={24} className="text-yellow-600 group-hover:text-yellow-700" /> },
  { name: 'HTML5', icon: <FaHtml5 size={24} className="text-red-600 group-hover:text-red-700" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={24} className="text-blue-500 group-hover:text-blue-600" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={24} className="text-blue-600 group-hover:text-blue-700" /> },
  { name: 'GitHub', icon: <FaGithub size={24} className="text-gray-900 group-hover:text-gray-700" /> },
  { name: 'MySQL', icon: <FaDatabase size={24} className="text-blue-600 group-hover:text-blue-700" /> },
  { name: 'Python', icon: <SiPython size={24} className="text-blue-500 group-hover:text-blue-600" /> },
  { name: 'MongoDB', icon: <SiMongodb size={24} className="text-green-600 group-hover:text-green-700" /> },
  { name: 'Firebase', icon: <SiFirebase size={24} className="text-yellow-500 group-hover:text-yellow-600" /> },
  { name: 'Postman', icon: <SiPostman size={24} className="text-orange-500 group-hover:text-orange-600" /> },
];

const Skills = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-40 max-w-7xl mx-auto">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 ">My Skills</h2>
        <div className="flex justify-center mb-8">
            <span
              className="bg-[#6C63FF] w-[250px] rounded-lg h-[5px] mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            ></span>
          </div>
        <p className=" text-sm md:text-lg text-gray-700 mb-8">
          Here are the technologies and tools I am proficient in.
        </p>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg p-3 md:p-6 hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="flex items-center group">
                <span className="mr-2 text-gray-500 transition-colors duration-300">
                  {skill.icon}
                </span>
                <h3 className="md:text-xl font-semibold text-gray-700">{skill.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
