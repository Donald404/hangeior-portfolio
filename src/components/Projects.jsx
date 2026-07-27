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

      category: "React Application",

      image: project1,

      description:
        "A modern hostel management system designed to simplify room allocation, student records, accommodation management, and administrative tasks.",

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

      category: "Responsive Website",

      image: project2,

      description:
        "A fully responsive school website featuring admissions, news updates, galleries, contact information, and an engaging online presence.",

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

      category: "Portfolio Website",

      image: project3,

      description:
        "A modern portfolio showcasing my expertise in graphic design, front-end development, and teaching through a clean and responsive interface.",

      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
      ],

      demo: "#",

      github: "#",
    },

  ];

  return (

    <SectionWrapper>

      <section
        id="projects"
        className="py-24 bg-gray-100"
      >

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              Featured Projects
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-8">
              Here are some projects that reflect my passion for building
              responsive websites and creating digital solutions that are
              practical, user-friendly, and visually appealing.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                {/* Project Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Project Content */}

                <div className="p-8">

                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {project.technologies.map((tech, i) => (

                      <span
                        key={i}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-3">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 rounded-xl transition"
                    >
                      <FaGithub />
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