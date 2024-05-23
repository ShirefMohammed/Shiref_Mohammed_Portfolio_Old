import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projectsData.json";
import style from "./Projects.module.css";

const Projects = () => {
  const fullstackProjects = projects
    .filter((project) => project.type === "fullstack")
    .reverse();

  const reactProjects = projects
    .filter((project) => project.type === "react")
    .reverse();

  const javascriptProjects = projects
    .filter((project) => project.type === "javascript")
    .reverse();

  const uiProjects = projects
    .filter((project) => project.type === "ui")
    .reverse();

  const bootstrapProjects = projects
    .filter((project) => project.type === "bootstrap")
    .reverse();

  return (
    <section className={style.projects}>
      {/* Section Title */}
      <h2 className="section_title">
        My <span>Projects</span>
      </h2>

      {/* Fullstack MERN Projects Section */}
      {fullstackProjects.length > 0 ? (
        <section className={style.fullstack_projects}>
          <h3>Fullstack MERN Projects</h3>
          <ul>
            {fullstackProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </section>
      ) : (
        ""
      )}

      <br />

      {/* React Projects Section */}
      {reactProjects.length > 0 ? (
        <section className={style.react_projects}>
          <h3>React Projects</h3>
          <ul>
            {reactProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </section>
      ) : (
        ""
      )}

      <br />

      {/* Javascript Projects Section */}
      {javascriptProjects.length > 0 ? (
        <section className={style.javascript_projects}>
          <h3>Javascript Projects</h3>
          <ul>
            {javascriptProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </section>
      ) : (
        ""
      )}

      <br />

      {/* UI Projects Section */}
      {uiProjects.length > 0 ? (
        <section className={style.ui_projects}>
          <h3>UI Projects</h3>
          <ul>
            {uiProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </section>
      ) : (
        ""
      )}

      <br />

      {/* Bootstrap Projects Section */}
      {bootstrapProjects.length > 0 ? (
        <section className={style.bootstrap_projects}>
          <h3>Bootstrap Projects</h3>
          <ul>
            {bootstrapProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </section>
      ) : (
        ""
      )}
    </section>
  );
};

export default Projects;
