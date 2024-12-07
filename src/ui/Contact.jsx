import { FaEnvelope, FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold  mb-10 py-5">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-10">
          <div className="flex flex-col items-center">
            <FaEnvelope size={32} className="" />
            <a
              href="mailto:abiyasfaw1996@gmail.com"
              className="text-teal-400 hover:underline mt-2"
            >
              abiyasfaw1996@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaInstagram size={32} className="text-black" />
            <a
              href="https://instagram.com/alex___asf"
              className="text-teal-400 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alex___asf
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaTelegram size={32} className="text-blue-400" />
            <a
              href="https://t.me/abiyasf"
              className="text-teal-400 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              @abiyasf
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub size={32} className="" />
            <a
              href="https://github.com/abiyasfaw0034"
              className="text-teal-400 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              abiyasfaw0034
            </a>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Abiy Asfaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
