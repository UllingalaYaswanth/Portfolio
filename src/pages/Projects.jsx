import React from "react";

// Your project data
const projects = [
  {
    name: "Rosys Virtual Solutions Website",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Developed a responsive website for Rosys Virtual Solutions with a focus on user experience and accessibility.",
    liveLink: "#",
    gitHubLink: "#",
  },
  {
    name: "Innovation Center for Drone Technology Website",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Showcased cutting-edge drone technologies and services through a well-designed, user-friendly website.",
    liveLink: "#",
    gitHubLink: "#",
  },
  {
    name: "Portfolio Website",
    technologies: "React.js, DaisyUI, GitHub Pages",
    description:
      "Created a portfolio to showcase my work using React.js and DaisyUI, deployed with GitHub Pages.",
    liveLink: "#",
    gitHubLink: "https://ullingalayaswanth.github.io/Portfolio/",
  },
  {
    name: "Mbstech.ai Website",
    technologies: "React.js, Tailwind CSS, Vanta.js, DaisyUI",
    description:
      "Developed a highly interactive website for an AI-focused company, using modern web technologies.",
    liveLink: "#",
    gitHubLink: "#",
  },
  {
    name: "Brain Tumor Diagnosis and Classification",
    technologies: "Flask, Python, C++, Streamlit",
    description:
      "Created a Flask-based app for brain tumor classification with machine learning, using Streamlit for the UI.",
    liveLink: "#",
    gitHubLink: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-40 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center" data-aos="fade-up">
            Some of My Projects
          </h1>
          <div className="flex justify-center mb-14">
            <span
              className="bg-[#6C63FF] w-[250px] md:w-[300px] lg:w-[350px] rounded-lg h-[5px] mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            ></span>
          </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              <p className="mb-4 text-sm md:text-md text-gray-700">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm md:text-md bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition-colors"
                >
                  View Live
                </a>
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm md:text-md bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
