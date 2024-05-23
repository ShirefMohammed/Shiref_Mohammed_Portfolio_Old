import skills from "../../../../data/skillsData.json";
import style from "./skills.module.css";

const Skills = () => {
  return (
    <section className={style.skills}>
      <h2 className="section_title">
        My <span>Skills</span>
      </h2>

      <ul className={style.skills}>
        {skills.map((skill) => (
          <li key={skill._id} title={skill.name}>
            <img src={skill.image} alt="" loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
