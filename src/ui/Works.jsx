const projects = [
  {
    title: "Database for a Student Management System in SQL",
    description: "A database solution to manage student records efficiently.",
    image:
      "data:image/png;base64,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",
  },
  {
    title: "Student Carpool System in Java",
    description: "An application to facilitate carpooling for students.",
    image:
      "data:image/png;base64,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",
  },
  {
    title: "House Rental System using C#",
    description: "A desktop application to manage house rentals effectively.",
    image:
      "data:image/png;base64,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",
  },
  {
    title: "Hotel Booking Website using React",
    description: "A fully responsive website for hotel booking.",
    image:
      "data:image/png;base64,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",
  },
  {
    title: "And Many More!",
    description:
      "Explore more projects showcasing my technical skills. You can find them in my Github",
    image:
      "data:image/png;base64,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",
  },
];
function Works() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-serif font-bold mb-10 text-center">
          My Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;