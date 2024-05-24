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
        Welcome! I am Shiref, a computer science student with 2 years of
        experience in crafting beautiful and functional user interfaces with
        React. With expertise in frontend React development and 1 year of
        Node.js backend experience, I am a versatile MERN stack developer. Let
        us collaborate to achieve your goals and exceed expectations!
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
