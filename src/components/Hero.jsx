import profile from "../assets/images/profile.png";
import cv from "../assets/documents/terhemen donald cv.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

import SectionWrapper from "./ui/SectionWrapper";

function Hero() {
  return (
    <SectionWrapper>
      <section
        id="home"
        className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ● Available for Freelance
            </span>

            <p className="text-blue-600 font-semibold text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
              Terhemen Donald
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Graphic Designer • Front-End Developer • Education Professional
            </h2>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-10">
              I create modern graphic designs, develop responsive websites,
              and leverage technology to improve educational experiences.
              I enjoy turning ideas into visually engaging and functional
              digital solutions.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mb-10">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
              >
                View My Work
              </a>

              <a
                href={cv}
                download
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition"
              >
                Download CV
              </a>

            </div>

            {/* SOCIAL LINKS */}

            <div className="flex gap-6 text-2xl">

              <a
                href="https://github.com/Donald404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition dark:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/Donald Terhemen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition dark:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://facebook.com/Nyiyongu Donald"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition dark:text-white"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.tiktok.com/@dho_nald"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition dark:text-white"
              >
                <FaTiktok />
              </a>

              <a
                href="mailto:nyiyongudonald@gmail.com"
                className="hover:text-blue-600 transition dark:text-white"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

<div className="flex justify-center">

  <div className="relative">

    {/* Blue Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>

    {/* Circle Image */}
    <img
      src={profile}
      alt="Terhemen Donald"
      className="
        relative
        w-80 h-80
        md:w-[430px] md:h-[430px]
        rounded-full
        object-cover
        object-top
        border-8 border-white
        dark:border-gray-800
        shadow-2xl
        hover:scale-105
        transition-all
        duration-500
      "
    />

  </div>

</div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Hero;