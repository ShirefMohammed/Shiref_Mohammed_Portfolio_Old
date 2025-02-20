import skillsData from "../../../../data/skillsData.json";
import style from "./skills.module.css";

const Skills = () => {
  return (
    <section className={style.skills}>
      <h2 className="section_title">
        My <span>Skills</span>
      </h2>

      <ul>
        {skillsData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
