import SectionWrapper from "./ui/SectionWrapper";

function Skills() {
  const developmentSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Responsive Design", level: 95 },
  ];

  const designSkills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "CorelDRAW", level: 98 },
    { name: "Canva", level: 95 },
    { name: "Brand Identity", level: 90 },
    { name: "Flyer Design", level: 98 },
    { name: "Social Media Design", level: 94 },
  ];

  const tools = [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "VS Code",
    "Adobe Photoshop",
    "CorelDRAW",
    "Canva",
    "Figma",
  ];

  const strengths = [
    {
      title: "Front-End Development",
      description:
        "Building fast, responsive and user-friendly web applications using modern technologies.",
    },
    {
      title: "Graphic Design",
      description:
        "Creating high-quality branding, flyers, posters and social media designs.",
    },
    {
      title: "Problem Solving",
      description:
        "Finding practical and creative solutions to technical and design challenges.",
    },
    {
      title: "Education Technology",
      description:
        "Applying technology to improve learning experiences and educational management.",
    },
  ];

  const ProgressBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold dark:text-white">{skill.name}</span>
        <span className="text-blue-600 font-bold">{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <SectionWrapper>
      <section
        id="skills"
        className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              My Skills
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My expertise spans web development, graphic design, educational
              technology and modern digital solutions.
            </p>

          </div>

          {/* Skills */}

          <div className="grid lg:grid-cols-2 gap-12 mb-20">

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">

              <h3 className="text-2xl font-bold mb-8 text-blue-600">
                Front-End Development
              </h3>

              {developmentSkills.map((skill, index) => (
                <ProgressBar key={index} skill={skill} />
              ))}

            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">

              <h3 className="text-2xl font-bold mb-8 text-blue-600">
                Graphic Design
              </h3>

              {designSkills.map((skill, index) => (
                <ProgressBar key={index} skill={skill} />
              ))}

            </div>

          </div>

          {/* Tools */}

          <div className="mb-20">

            <h3 className="text-3xl font-bold text-center text-blue-600 mb-10">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-4">

              {tools.map((tool, index) => (

                <span
                  key={index}
                  className="px-5 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 cursor-default"
                >
                  {tool}
                </span>

              ))}

            </div>

          </div>

          {/* Strengths */}

          <div>

            <h3 className="text-3xl font-bold text-center text-blue-600 mb-10">
              Professional Strengths
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {strengths.map((item, index) => (

                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 transition duration-500"
                >

                  <h4 className="text-xl font-bold text-blue-600 mb-4">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 leading-7">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;