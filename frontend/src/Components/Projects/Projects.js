import "./Projects.css";

const Projects = () => {
  return (
    <div className="projectsPage">
      <div className="projects-static">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I've worked on. Each project showcases my skills in fullstack development, including both frontend and backend technologies.
        </p>
      </div>
      <div className="projects-dynamic">
        {/* Project details will go here */}
      </div>
    </div>
  );
}

export default Projects;
