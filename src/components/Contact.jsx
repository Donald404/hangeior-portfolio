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

    console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result);

        setMessage("✅ Message sent successfully!");

        form.current.reset();
      })
      .catch((error) => {
        console.log(error);

        setMessage(
          `❌ Failed to send message.\n${error.text || error.message}`
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
        className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              Get In Touch
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <div>
              <div className="space-y-8">

                <div className="flex items-center gap-5">
                  <div className="bg-blue-600 text-white p-4 rounded-xl">
                    <FaEnvelope size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg dark:text-white">
                      Email
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400">
                      nyiyongudonald@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-blue-600 text-white p-4 rounded-xl">
                    <FaPhoneAlt size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg dark:text-white">
                      Phone
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400">
                      +234 808 286 6341
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-blue-600 text-white p-4 rounded-xl">
                    <FaMapMarkerAlt size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg dark:text-white">
                      Location
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}

              <div className="flex gap-5 mt-10 text-2xl">

                <a
                  href="https://github.com/Donald404"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/donald-terhemen"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://tiktok.com/@dho_nald"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaTiktok />
                </a>

              </div>
            </div>

            {/* RIGHT */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8"
            >

              {/* This is for {{title}} */}

              <input
                type="hidden"
                name="title"
                value="Portfolio Contact Form"
              />

              <div className="mb-6">
                <label className="block mb-2 font-semibold dark:text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold dark:text-white">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold dark:text-white">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {message && (
                <p className="mt-6 whitespace-pre-line text-center dark:text-white">
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