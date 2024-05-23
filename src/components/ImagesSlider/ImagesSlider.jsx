/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import style from "./ImagesSlider.module.css";

const ImagesSlider = ({ project, setOpenImagesSlider }) => {
  return (
    <div className={style.images_slider}>
      <div
        className={style.offset_layer}
        onClick={() => setOpenImagesSlider(false)}
      ></div>

      <div className={style.slider_container}>
        <button
          type="button"
          className={style.close_btn}
          onClick={() => setOpenImagesSlider(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>

        {project.images.map((image, i) => (
          <img key={i} src={image} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;
