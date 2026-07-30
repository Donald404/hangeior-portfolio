import profile from "../assets/images/dona.png";
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
        className="min-h-screen bg-gray-50 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ● Available for Freelance
            </span>

            <p className="text-blue-600 font-semibold text-lg mb-3">
              Hello, I'm
            </p>

            <h5 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight mb-5">
              Terhemen Hangeior Donald
            </h5>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Graphic Designer | Front-End Developer | Teacher
            </h2>

            <p className="text-lg leading-8 text-gray-600 max-w-xl mb-10">
              I design engaging visual content, build responsive websites,
              and inspire learning through effective teaching. I enjoy creating
              digital solutions that are practical, modern, and impactful.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mb-10">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Projects
              </a>

              <a
                href={cv}
                download
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Download CV
              </a>

            </div>

            {/* SOCIAL LINKS */}

            <div className="flex gap-6 text-2xl text-gray-700">

              <a
                href="https://github.com/Donald404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/Donald-Terhemen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://facebook.com/NyiyonguDonald"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.tiktok.com/@dho_nald"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaTiktok />
              </a>

              <a
                href="mailto:nyiyongudonald@gmail.com"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

  <div className="relative">

    {/* Glow */}

    <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20"></div>

    {/* Photo */}

    <div className="relative w-[320px] md:w-[420px] rounded-3xl overflow-hidden shadow-2xl">

      <img
        src={profile}
        alt="Terhemen Donald"
        className="w-full h-auto object-cover object-top"
      />

    </div>

  </div>

</div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Hero;