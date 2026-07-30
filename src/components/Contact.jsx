import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

import SectionWrapper from "./ui/SectionWrapper";

function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setMessage("✅ Thank you! Your message has been sent successfully.");
        form.current.reset();
      })
      .catch((error) => {
        setMessage(
          `❌ Unable to send your message.\n${error.text || error.message}`
        );
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <SectionWrapper>
      <section
        id="contact"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              Let's Work Together
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-8">
              Whether you need a creative graphic designer, a responsive website,
              or simply want to discuss an idea, I'd be delighted to hear from you.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-14">

            {/* LEFT */}

            <div>

              <div className="space-y-8">

                <div className="flex items-center gap-5">

                  <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
                    <FaEnvelope size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      nyiyongudonald@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
                    <FaPhoneAlt size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      +234 808 286 6341
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">
                    <FaMapMarkerAlt size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Location
                    </h3>

                    <p className="text-gray-600">
                      Lagos, Nigeria
                    </p>
                  </div>

                </div>

              </div>

              {/* Social Links */}

              <div className="flex gap-5 mt-10 text-2xl text-gray-700">

                <a
                  href="https://github.com/Donald404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/donald-terhemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://facebook.com/"
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

              </div>

            </div>

            {/* RIGHT */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <input
                type="hidden"
                name="title"
                value="Portfolio Contact Form"
              />

              <div className="mb-6">

                <label className="block mb-2 font-semibold text-gray-800">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

              </div>

              <div className="mb-6">

                <label className="block mb-2 font-semibold text-gray-800">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

              </div>

              <div className="mb-6">

                <label className="block mb-2 font-semibold text-gray-800">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>

              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-semibold transition duration-300"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {message && (

                <p className="mt-6 text-center font-medium whitespace-pre-line text-gray-700">
                  {message}
                </p>

              )}

            </form>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Contact;