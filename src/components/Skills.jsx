import SectionWrapper from "./ui/SectionWrapper";

function Skills() {
  const skills = [
    {
      title: "Graphic Design",
      icon: "🎨",
      description:
        "I create visually engaging designs that communicate ideas clearly and leave lasting impressions.",
      items: [
        "Adobe Photoshop",
        "CorelDRAW",
        "Canva",  
        "Flyers & Posters",
      ],
    },

    {
      title: "Teaching",
      icon: "📚",
      description:
        "I enjoy helping students learn through clear instruction, creativity, and practical classroom experience.",
      items: [
        "Lesson Planning",
        "Classroom Management",
        "Student Mentoring",
        "Communication",
        "Problem Solving",
      ],
    },

    {
      title: "Professional Strengths",
      icon: "🚀",
      description:
        "Beyond technical skills, I value professionalism, teamwork, and delivering quality results on every project.",
      items: [
        "Creativity",
        "Attention to Detail",
        "Time Management",
        "Team Collaboration",
        "Leadership",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="skills"
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              My Skills
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              My experience combines creativity, teaching, and professional
              values to deliver meaningful results.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-8">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8"
              >

                <div className="text-5xl mb-6">
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {skill.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {skill.description}
                </p>

                <ul className="space-y-3">

                  {skill.items.map((item, i) => (

                    <li
                      key={i}
                      className="text-gray-700 flex items-center gap-2"
                    >
                      ✅ {item}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;