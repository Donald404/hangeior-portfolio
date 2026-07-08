import profile from "../assets/images/dona.png";
import SectionWrapper from "./ui/SectionWrapper";
import Counter from "./ui/Counter";

function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Learn more about my journey, experience, and passion for
              combining creativity, technology, and education to solve
              real-world problems.
            </p>

          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

           {/* Left Side */}

<div className="flex justify-center">

  <div className="relative">

    {/* Background Glow */}
    <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

    {/* Portrait Card */}
    <div
  className="
    relative
    w-[330px]
    md:w-[390px]
    rounded-3xl
    overflow-hidden
    border-8
    border-white
    dark:border-gray-800
    shadow-2xl
  "
>
      <img
  src={profile}
  alt="Terhemen Donald"
  className="
    w-full
    h-auto
    block
    hover:scale-105
    transition
    duration-500
  "
/>
    </div>

  </div>

</div>

            {/* Right Side */}

            <div>

              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Graphic Designer, Front-End Developer & Education Professional
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
                I am passionate about creating visually compelling designs and
                developing responsive web applications that provide excellent
                user experiences. My journey combines creativity, technology,
                and education to deliver impactful digital solutions.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-8 mb-10">
                Over the years, I have worked on branding projects, event
                flyers, educational platforms, and modern websites. I believe
                every project should not only look beautiful but also solve
                real problems and provide value to users.
              </p>

              {/* Statistics */}

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={20} suffix="+" />
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Graphic Design Projects
                  </p>

                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={10} suffix="+" />
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Web Projects
                  </p>

                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={5} suffix="+" />
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Years of Experience
                  </p>

                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={100} suffix="%" />
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Commitment
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;