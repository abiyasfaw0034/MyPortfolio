import pic from "../pic/pic.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Front() {
  return (
    <div className="min-h-screen grid sm:grid-cols-2 grid-cols-1  bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white ">
      {/* Left Section */}
      <motion.div
        variants={fadeIn("down", 0.1)} // Pass direction and delay
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid   justify-center "
      >
        {/* Profile Card */}
        <div className="flex items-center space-x-6   text-gray-800 shadow-lg backdrop-blur-md">
          <div className="w-72 h-80 rounded-lg overflow-hidden shadow-md">
            <img
              src={pic}
              alt="picture of me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl  font-merriweather">I am Abiy Asfaw</h1>
          <p className=" text-lg text-gray-600">
            A student at University of Addis Ababa
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={fadeIn("right", 0.1)} // Pass direction and delay
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex-1 flex justify-center items-center"
      >
        <p className="text-3xl md:text-5xl font-light">
          Passionate about technology and innovation
        </p>
      </motion.div>
    </div>
  );
}
export default Front;
