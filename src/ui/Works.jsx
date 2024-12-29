import { csharp, db, etc, java, react } from "../variants";

const projects = [
  {
    title: "Database for a Student Management System in SQL",
    description: "A database solution to manage student records efficiently.",
    image: db,
    link: "https://github.com/abiyasfaw0034/Active-student-management-system-using-microsoft-sql-server",
  },
  {
    title: "Student Carpool System in Java",
    description: "An application to facilitate carpooling for students.",
    image: java,
    link: "https://github.com/abiyasfaw0034/Student-carpool-system-using-JAVA",
  },
  {
    title: "House Rental System using C#",
    description: "A desktop application to manage house rentals effectively.",
    image: csharp,
    link: "https://github.com/abiyasfaw0034",
  },
  {
    title: "Hotel Booking Website using React",
    description: "A fully responsive website for hotel booking.",
    image: react,
    link: "https://github.com/abiyasfaw0034/Full-Stack-Hotel-Booking-website",
  },
  {
    title: "And Many More!",
    description:
      "Explore more projects showcasing my technical skills. You can find them in my Github",
    image: etc,
    link: "https://github.com/abiyasfaw0034",
  },
];

function Works() {
  return (
    <div
      id="work"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-serif font-bold mb-10 text-center">
          My Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={`${project.title} image`}
                className="w-40 h-36 object-fill"
              />
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-teal-400">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
