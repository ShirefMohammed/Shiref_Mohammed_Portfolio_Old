/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faClapperboard,
  faCode,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import VideoViewer from "../VideoViewer/VideoViewer";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import style from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const [viewMoreDisc, setViewMoreDisc] = useState(false);
  const [openReviewVideo, setOpenReviewVideo] = useState(false);
  const [openImagesSlider, setOpenImagesSlider] = useState(false);

  return (
    <div className={style.project_card}>
      {/* Project Thumbnail */}
      <Link to={`/projects/${project._id}`}>
        <img src={project.thumbnail} alt="" loading="lazy" />
      </Link>

      {/* Project Title */}
      <Link to={`/projects/${project._id}`}>
        <h3>{project.title}</h3>
      </Link>

      {/* Project Desc */}
      {project.desc.length > 200 ? (
        <pre>
          {viewMoreDisc ? project.desc : project.desc.substring(0, 201)}
          {viewMoreDisc ? (
            <button type="button" onClick={() => setViewMoreDisc(false)}>
              Show less
            </button>
          ) : (
            <button type="button" onClick={() => setViewMoreDisc(true)}>
              ...more
            </button>
          )}
        </pre>
      ) : (
        <pre>{project.desc}</pre>
      )}

      {/* Project Links */}
      <ul>
        {project.demoUrl ? (
          <li>
            <Link
              to={project.demoUrl}
              target="_blank"
              className="first_btn"
              title="live demo"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </li>
        ) : (
          ""
        )}
        {project.codeUrl ? (
          <li>
            <Link
              to={project.codeUrl}
              target="_blank"
              className="first_btn"
              title="project code"
            >
              <FontAwesomeIcon icon={faCode} />
            </Link>
          </li>
        ) : (
          ""
        )}
        {project.videoUrl ? (
          <li>
            <button
              type="button"
              className="first_btn"
              title="review video"
              onClick={() => setOpenReviewVideo(true)}
            >
              <FontAwesomeIcon icon={faClapperboard} />
            </button>
          </li>
        ) : (
          ""
        )}
        {project.images ? (
          <li>
            <button
              type="button"
              className="first_btn"
              title="open more images slider"
              onClick={() => setOpenImagesSlider(true)}
            >
              <FontAwesomeIcon icon={faImages} />
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>

      {openReviewVideo ? (
        <VideoViewer
          project={project}
          setOpenReviewVideo={setOpenReviewVideo}
        />
      ) : (
        ""
      )}

      {openImagesSlider ? (
        <ImagesSlider
          project={project}
          setOpenImagesSlider={setOpenImagesSlider}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectCard;
