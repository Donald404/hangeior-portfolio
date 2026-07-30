import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const links = [
  "home",
  "skills",
  "projects",
  "gallery",
  "contact",
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id));

    const handleScroll = () => {
      const scrollPosition = window.innerHeight * 0.35;

      for (const section of sections) {
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
          setActive(section.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link) => {
    setActive(link);
    setMenuOpen(false);

    const section = document.getElementById(link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <button
  onClick={() => handleClick("home")}
  className="flex items-center"
>
  <img
    src={logo}
    alt="Terhemen Donald Logo"
    className="h-12 w-auto"
  />
</button>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleClick(link)}
                className={`capitalize transition duration-300 ${
                  active === link
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleClick("contact")}
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">

          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`block w-full text-left px-6 py-4 capitalize transition ${
                active === link
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              }`}
            >
              {link}
            </button>
          ))}

          <button
            onClick={() => handleClick("contact")}
            className="block w-[calc(100%-3rem)] mx-6 my-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;