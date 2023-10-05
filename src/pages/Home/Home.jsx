import { Link } from 'react-router-dom';
import style from './Home.module.css';
import hero from '../../assets/shiref_mohammed_image_2.jpg'

const Home = () => {
  return (
    <section
      className={style.home}
      id="home"
    >
      <div className="container">
        <div className={style.content}>
          <div className={style.top_title}>
            <h2 className="section_title">
              Shiref <span>Mohammed</span>
            </h2>

            <Link
              to='mailto:shirefmohammed@std.mans.edu.eg'
            >
              shirefmohammed@std.mans.edu.eg
            </Link>
          </div>

          <div className={style.image}>
            <img
              src={hero}
              alt="hero"
            />
            <span></span>
          </div>

          <div className={style.jop_title}>
            <h3>Software Developer</h3>
          </div>

          <p className={style.description}>
            welcome here,

            I am Shiref, a computer science student with over 15 months of
            experience in the field.

            I am passionate about creating beautiful and functional user
            interfaces that enhance the user experience with high quality and
            performance.

            I look forward to working together and giving you the best results
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home