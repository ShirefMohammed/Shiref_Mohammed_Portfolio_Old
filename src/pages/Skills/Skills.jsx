import style from './skills.module.css';

import html from "../../assets/html_skill_image.png";
import css from "../../assets/css_skills_image.png";
import javascript from "../../assets/javascript_skill_image.png";

import react from "../../assets/react_skill_image.png";
import redux from "../../assets/redux_skill_image.png.png";

import bootstrap from "../../assets/bootstrap_skill_image.png";
import tailwind from "../../assets/tailwind_skill_image.png";

import git from "../../assets/git_skill_image.png";

import node from "../../assets/node_skill_image.png";
import express from "../../assets/express_skill_image.png";
import mongodb from "../../assets/mongodb_skill_image.png";

import npm from "../../assets/npm_skill_image.png";
import chatGbt from "../../assets/chatgbt_skill_image.png";

import CSharp from "../../assets/c_sharp_skill_image.png";
import dataStructures from "../../assets/dataStructures_skill_image.png";
import CS from "../../assets/cs_skills_image.png";

const Skills = () => {
  return (
    <section className={style.skills}>
      <div className="container">
        <div className={style.content}>
          <h2 className="section_title">
            My <span>Skills</span>
          </h2>

          <div className={style.boxes}>
            <div className={style.box}>
              <img
                src={html}
                alt="html"
                title="html 5"
              />
            </div>

            <div className={style.box}>
              <img
                src={css}
                alt="css"
                title="css"
              />
            </div>

            <div className={style.box}>
              <img
                src={javascript}
                alt="javascript"
                title="javascript"
              />
            </div>
            
            <div className={style.box}>
              <img
                src={react}
                alt="react"
                title="react js"
              />
            </div>

            <div className={style.box}>
              <img
                src={redux}
                alt="redux"
                title="redux & redux toolkit"
              />
            </div>

            <div className={style.box}>
              <img
                src={bootstrap}
                alt="bootstrap"
                title="bootstrap"
              />
            </div>

            <div className={style.box}>
              <img
                src={tailwind}
                alt="tailwind"
                title="tailwind css"
              />
            </div>

            <div className={style.box}>
              <img
                src={git}
                alt="git"
                title="git & terminal & github"
              />
            </div>

            <div className={style.box}>
              <img
                src={node}
                alt="node"
                title="node js"
              />
            </div>

            <div className={style.box}>
              <img
                src={express}
                alt="express"
                title="express js"
              />
            </div>

            <div className={style.box}>
              <img
                src={mongodb}
                alt="mongodb"
                title="mongodb"
              />
            </div>

            <div className={style.box}>
              <img
                src={npm}
                alt="npm"
                title="npm"
              />
            </div>

            <div className={style.box}>
              <img
                src={chatGbt}
                alt="chatGbt"
                title="chat gbt"
              />
            </div>

            <div className={style.box}>
              <img
                src={CSharp}
                alt="CSharp"
                title="C# & OOP"
              />
            </div>

            <div className={style.box}>
              <img
                src={dataStructures}
                alt="dataStructures"
                title="data structures & algorithms"
              />
            </div>

            <div className={style.box}>
              <img
                src={CS}
                alt="CS"
                title="computer science fundamentals"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills