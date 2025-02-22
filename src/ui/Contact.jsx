import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState(null); // State for managing alerts

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0rxawmm", "template_f46qy2i", form.current, {
        publicKey: "WtM3DgqHhQijQCJQg", // Replace with your actual public key
      })
      .then(
        () => {
          setAlert({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
          setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlert({
            type: "failure",
            message: "Failed to send message. Please try again.",
          });
          setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
        }
      );
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 px-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-20">
          Get in Touch
        </h2>

        {/* Alert Box */}
        {alert && (
          <div
            className={`text-center p-4 rounded-lg mb-4 ${
              alert.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {alert.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} />
              <a
                href="mailto:abiyasfaw1996@gmail.com"
                className="text-teal-400 hover:underline"
              >
                abiyasfaw1996@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt size={24} />
              <p className="text-teal-400">+251902641761</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaInstagram size={24} className="text-pink-500" />
              <a
                href="https://instagram.com/alex___asf"
                className="text-teal-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @alex___asf
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaTelegram size={24} className="text-blue-400" />
              <a
                href="https://t.me/abiyasf"
                className="text-teal-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @abiyasf
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub size={24} />
              <a
                href="https://github.com/abiyasfaw0034"
                className="text-teal-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                abiyasfaw0034
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Abiy Asfaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
