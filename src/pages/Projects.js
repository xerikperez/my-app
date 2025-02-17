import React from "react";
import "../Styles/index.css";
const projects = [
  { title: "Portfolio Website", description: "A personal portfolio built with React and Tailwind CSS.", link: "#" },
  { title: "E-Commerce App", description: "An online store with payment integration.", link: "#" }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;