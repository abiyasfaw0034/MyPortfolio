// import { etc } from "../variants";
import react from "../pic/image2.png";
import db from "../pic/b.jpg";
import csharp from "../pic/image1.png";
import java from "../pic/a.webp";
const projects = [
  {
    title: "Database for a Student Management System in SQL",
    description:
      "Helps schools efficiently manage student records, grades, and administrative tasks using a structured SQL database.",
    image: db,
    link: "https://github.com/abiyasfaw0034/Active-student-management-system-using-microsoft-sql-server",
  },
  {
    title: "Student Carpool System in Java",
    description:
      "Helps students find and coordinate carpooling options, reducing travel costs and promoting eco-friendly commuting.",
    image: java,
    link: "https://github.com/abiyasfaw0034/Student-carpool-system-using-JAVA",
  },
  {
    title: "House Rental System using C#",
    description:
      "Helps landlords and tenants manage rental properties efficiently, streamlining listings, applications, and payments.",
    image: csharp,
    link: "https://github.com/abiyasfaw0034",
  },
  {
    title: "Hotel Booking Website using React",
    description:
      "Helps travelers find, compare, and book hotels with an intuitive and responsive user experience.",
    image: react,
    link: "https://github.com/abiyasfaw0034/Full-Stack-Hotel-Booking-website",
  },
];

function Works() {
  return (
    <div id="work" className="bg-gray-900 text-white py-20 px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-serif font-bold mb-10 text-center">
          My Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover
                 rounded"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-400 mt-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    link to github
                  </a>
                  {project.deployed && (
                    <a
                      href={project.deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-14">
        <button className="w-full p-4 rounded-md m-4 bg-gray-700 hover:bg-gray-800 text-teal-400">
          See more projects on My Github
        </button>
      </div>
    </div>
  );
}

export default Works;
