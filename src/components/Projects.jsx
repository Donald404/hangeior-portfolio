import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import SectionWrapper from "./ui/SectionWrapper";

function Projects() {

  const projects = [

    {
      title: "Student Hostel Management System",

      category: "Front-End Development",

      image: project1,

      description:
        "A modern hostel management application for managing students, rooms, allocations and hostel administration.",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],

      demo: "#",

      github: "#",
    },

    {
      title: "School Management Website",

      category: "Web Development",

      image: project2,

      description:
        "A responsive school website featuring admissions, gallery, news updates, contact information and online presence.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      demo: "#",

      github: "#",
    },

    {
      title: "Personal Portfolio",

      category: "React Project",

      image: project3,

      description:
        "A professional portfolio website showcasing web development, graphic design and educational experience.",

      technologies: [
        "React",
        "Vite",
        "Tailwind",
      ],

      demo: "#",

      github: "#",
    },

  ];

  return (

    <SectionWrapper>

      <section
        id="projects"
        className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-blue-600 mb-4">
            Featured Projects
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            Here are some of my recent web development projects that
            demonstrate my passion for creating modern, responsive,
            and user-friendly applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}

                <div className="p-7">

                  <p className="text-blue-600 font-semibold text-sm mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-7 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {project.technologies.map((tech, i) => (

                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                      <FaGithub />

                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </SectionWrapper>

  );
}

export default Projects;