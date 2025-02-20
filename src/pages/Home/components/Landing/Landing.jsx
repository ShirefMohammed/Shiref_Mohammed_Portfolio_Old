/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={style.landing}>
      <header className={style.title}>
        <h2 className="section_title">
          Shiref <span>Mohammed</span>
        </h2>

        <Link to="mailto:shirefmohammed@std.mans.edu.eg">
          shirefmohammed@std.mans.edu.eg
        </Link>
      </header>

      <div className={style.picture_container}>
        <img src={"/Hero_Picture.jpg"} alt="" loading="lazy" />
        <span></span>
      </div>

      <h3 className={style.jop_title}>Software Developer</h3>

      <p className={style.bio}>
        Hi, I'm Shiref, a third-year CIS student at Mansoura University and a
        passionate PERN/MERN stack developer with 2.5+ years of experience. I
        focus on merging academic knowledge with real-world application through
        practical projects.
      </p>

      <a
        href="/Shiref_Mohammed_CV.pdf"
        className={`first_btn ${style.download_cv_link}`}
        download="Shiref_Mohammed_CV.pdf"
      >
        <span>Download my CV</span>
      </a>
    </section>
  );
};

export default Landing;
