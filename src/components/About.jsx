import profile from "../assets/images/dona.png";
import SectionWrapper from "./ui/SectionWrapper";
import Counter from "./ui/Counter";

function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              About Me
            </h2>

          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}

            <div className="flex justify-center">

              <div className="relative">

                {/* Background Glow */}

                <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20"></div>

                {/* Image */}

                <div className="relative w-[340px] md:w-[420px] h-[460px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl">

                  <img
                    src={profile}
                    alt="Terhemen Donald"
                    className="w-full h-full object-cover object-top"
                  />

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div>

              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Graphic Designer, Front-End Developer & Teacher
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                I am passionate about transforming ideas into meaningful digital
                experiences through creative design and modern web development.
                Alongside my work in technology, I enjoy teaching and sharing
                knowledge that empowers others to learn and grow.
              </p>

              <p className="text-gray-600 leading-8 mb-10">
                Whether designing brand identities, creating promotional
                materials, or developing responsive websites, I focus on
                delivering solutions that are visually appealing, functional,
                and impactful.
              </p>

              {/* Statistics */}

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={20} suffix="+" />
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Projects Completed
                  </p>

                </div>

                <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={5} suffix="+" />
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Years Experience
                  </p>

                </div>

                <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={5} suffix="+" />
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Web Projects
                  </p>

                </div>

                <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg">

                  <h4 className="text-4xl font-bold text-blue-600">
                    <Counter end={100} suffix="%" />
                  </h4>

                  <p className="text-gray-600 mt-2">
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