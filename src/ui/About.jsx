/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
function About() {
  return (
    <div id="about" className="bg-gray-900 text-white py-24 px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-serif font-bold mb-10">About Me</h2>
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m <span className="font-bold text-teal-400">Abiy Asfaw</span>,
            a passionate{" "}
            <span className="text-teal-400">Information Science</span> student
            at{" "}
            <span className="font-bold text-teal-400">
              Addis Ababa University
            </span>
            , one of Ethiopia’s leading academic institutions. My journey in
            technology began with a curiosity about how systems work, which has
            grown into a deep interest in software development, data management,
            and innovative technologies.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Outside of academics and tech, I’m someone who believes in the power
            of balance. I enjoy immersing myself in the world of music and
            movies, which inspire my creativity and broaden my perspective.
            Playing basketball is another passion of mine—it keeps me active,
            helps me stay disciplined, and teaches the importance of teamwork.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Whether it's solving complex problems in coding, enjoying a soulful
            tune, or competing on the basketball court, I strive to bring
            dedication and enthusiasm to everything I do.
          </p>
        </div>
        {/* Professional Skillset Section */}
        <div className="mt-10">
          <h3 className="text-3xl font-serif font-bold mb-5">
            Professional Skills
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            I have hands-on experience working with various tools and frameworks
            that help me build efficient and scalable solutions. Here are some
            of the key technologies I've worked with:
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { Component: FaReact, name: "React" },
              { Component: RiTailwindCssFill, name: "Tailwind CSS" },
              { Component: FaNode, name: "Node.js" },
              { Component: IoLogoFirebase, name: "Firebase" },
              { Component: RiSupabaseFill, name: "Supabase" },
              { Component: FaGitAlt, name: "Git" },
            ].map(({ Component, name }, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center"
                initial="hidden"
                whileInView="show"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Component className="w-20 h-20 mb-4 text-teal-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
