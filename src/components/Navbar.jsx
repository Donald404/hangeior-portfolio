import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "gallery",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;

          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold text-blue-600"
        >
          HD
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 font-medium">

          {links.map((link) => (
            <li key={link}>

              <a
                href={`#${link}`}
                className={`capitalize transition ${
                  active === link
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}
              >
                {link}
              </a>

            </li>
          ))}

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-yellow-400 hover:text-blue-600 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hire Me */}

          <a
            href="#contact"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">

          {links.map((link) => (

            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 capitalize transition ${
                active === link
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link}
            </a>

          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mx-6 my-4 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>

        </div>

      )}

    </header>
  );
}

export default Navbar;