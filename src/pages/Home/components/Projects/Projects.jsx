import { Link } from "react-router-dom";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import projects from "../../../../data/projectsData.json";
import style from "./Projects.module.css";

const Projects = () => {
  const limit = 4;
  const startIndex = projects.length - limit > 0 ? projects.length - limit : 0;
  const endIndex = projects.length;

  const selectedProjects = projects.slice(startIndex, endIndex).reverse();

  return (
    <section className={style.projects}>
      <h2 className="section_title">
        My <span>Projects</span>
      </h2>

      <ul className={style.projects_list}>
        {selectedProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>

      <Link to="/projects" className="first_btn">
        <span>See all Projects</span>
      </Link>
    </section>
  );
};

export default Projects;
