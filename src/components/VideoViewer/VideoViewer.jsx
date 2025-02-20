/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import style from "./VideoViewer.module.css";

const VideoViewer = ({ project, setOpenReviewVideo }) => {
  return (
    <div className={style.video_card}>
      <div
        className={style.offset_layer}
        onClick={() => setOpenReviewVideo(false)}
      ></div>

      <div className={style.video_container}>
        <button
          type="button"
          className={style.close_btn}
          onClick={() => setOpenReviewVideo(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>

        <video poster={project.thumbnail} controls autoPlay>
          <source src={project.videoUrl} type="video/mp4" />
          <source src={project.videoUrl} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoViewer;
