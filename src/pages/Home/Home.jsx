import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import style from "./Home.module.css";

const Home = () => {
  return (
    <section className={style.home}>
      <Landing />

      <div className={style.break_line}></div>

      <Skills />

      <div className={style.break_line}></div>

      <Projects />

      <div className={style.break_line}></div>

      <Contact />
    </section>
  );
};

export default Home;
