import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import style from "./Project.module.css";

const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(projectsData.find((project) => project._id === projectId));
  }, [projectId]);

  return (
    <section className={style.project}>
      {project?._id ? (
        <>
          {/* Project Title */}
          <h2>
            Projects \ <span>{project.title}</span>
          </h2>

          {/* Project Video */}
          {project.videoUrl ? (
            <video poster={project.thumbnail} controls>
              <source src={project.videoUrl} type="video/mp4" />
              <source src={project.videoUrl} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : (
            ""
          )}

          {/* Project Slider */}
          {project.images.length > 0 ? (
            <div className={style.images_slider}>
              {project.images.map((image, i) => (
                <img key={i} src={image} alt="" loading="lazy" />
              ))}
            </div>
          ) : (
            ""
          )}

          {/* Project Desc */}
          {project.desc ? (
            <div className={style.about}>
              <h3>About the Project</h3>
              <q>{project.desc}</q>
            </div>
          ) : (
            ""
          )}

          {/* Project Technologies */}
          {project.technologies.length > 0 ? (
            <div className={style.technologies}>
              <h3>Used Technologies</h3>
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}

          {/* Project features */}
          {project.features.length > 0 ? (
            <div className={style.futures}>
              <h3>Futures</h3>
              <ul>
                {project.features.map((future, i) => (
                  <li key={i}>{future}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}

          {/* Project Links */}
          {project.demoUrl || project.codeUr ? (
            <div className={style.links}>
              <h3>Project Links</h3>
              <ul>
                {project.demoUrl ? (
                  <li>
                    <span>Project Live Demo</span>
                    <Link to={project.demoUrl} target="_blank">
                      {project.demoUrl}
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                {project.codeUrl ? (
                  <li>
                    <span>Project Code</span>
                    <Link to={project.codeUrl} target="_blank">
                      {project.codeUrl}
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default Project;
