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

      image: project1,

      description:
        "A modern hostel management application designed to simplify room allocation, student records, and hostel administration.",

      demo: "#",

      github: "#",
    },

    {
      title: "School Management Website",

      image: project2,

      description:
        "A responsive school website providing information on admissions, academics, news updates, and contact details through a modern interface.",

      demo: "#",

      github: "#",
    },

    {
      title: "Personal Portfolio",

      image: project3,

      description:
        "A modern personal portfolio showcasing my graphic design projects, web development work, and professional experience.",

      demo: "#",

      github: "#",
    },

  ];

  return (

    <SectionWrapper>

      <section
        id="projects"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-blue-600 mb-4">
            Featured Projects
          </h2>

          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            A selection of projects demonstrating my ability to build modern,
            responsive, and user-focused digital solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >

                {/* Project Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Project Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-8">
                    {project.description}
                  </p>

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
                      className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
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