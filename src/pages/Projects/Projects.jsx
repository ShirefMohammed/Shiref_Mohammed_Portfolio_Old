import { Link } from 'react-router-dom';
import style from './Projects.module.css';

import {
  React_Projects,
  JavaScript_Projects,
  FullStack_Projects,
  UI_Designs,
  BootStrap_Designs,
} from '../../data/ProjectsData';

const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <div className="container">
        <div className={style.content}>
          <h2 className="section_title">
            My <span>Projects</span>
          </h2>

          <div className={style.project_sections}>
            <ReactProjects />
            <JavaScriptProjects />
            <FullStackProjects />
            <UIDesigns />
            <BootStrapDesigns />
          </div>
        </div>
      </div>
    </div>
  )
}

const ReactProjects = () => {
  return (
    <div className={style.react_projects}>
      <h3 className={style.project_sections_title}>
        React Projects
      </h3>

      <div className={style.items}>
        {
          React_Projects?.length > 0 && React_Projects.map((item, index) => (
            <div className={style.item} key={index}>
              <img
                className={style.item_image}
                src={item.img}
                alt='item.img'
              />

              <div className={style.item_title}>
                {item.title}
              </div>

              <div className={style.item_description}>
                {item.description}
              </div>

              <div className={style.item_links}>
                {
                  item.app_link &&
                  <Link
                    to={item.app_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                }

                {
                  item.code_link &&
                  <Link
                    to={item.code_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-code"></i>
                  </Link>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const JavaScriptProjects = () => {
  return (
    <div className={style.javascript_projects}>
      <h3 className={style.project_sections_title}>
        JavaScript Projects
      </h3>

      <div className={style.items}>
        {
          JavaScript_Projects?.length > 0 &&
          JavaScript_Projects.map((item, index) => (
            <div className={style.item} key={index}>
              <img
                className={style.item_image}
                src={item.img}
                alt='item.img'
              />

              <div className={style.item_title}>
                {item.title}
              </div>

              <div className={style.item_description}>
                {item.description}
              </div>

              <div className={style.item_links}>
                {
                  item.app_link &&
                  <Link
                    to={item.app_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                }

                {
                  item.code_link &&
                  <Link
                    to={item.code_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-code"></i>
                  </Link>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const FullStackProjects = () => {
  return (
    <div className={style.javascript_projects}>
      <h3 className={style.project_sections_title}>
        Fullstack Projects
      </h3>

      <div className={style.items}>
        {
          FullStack_Projects?.length > 0 &&
          FullStack_Projects.map((item, index) => (
            <div className={style.item} key={index}>
              <img
                className={style.item_image}
                src={item.img}
                alt='item.img'
              />

              <div className={style.item_title}>
                {item.title}
              </div>

              <div className={style.item_description}>
                {item.description}
              </div>

              <div className={style.item_links}>
                {
                  item.app_link &&
                  <Link
                    to={item.app_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                }

                {
                  item.code_link &&
                  <Link
                    to={item.code_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-code"></i>
                  </Link>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const UIDesigns = () => {
  return (
    <div className={style.UI_designs}>
      <h3 className={style.project_sections_title}>
        UI Designs
      </h3>

      <div className={style.items}>
        {
          UI_Designs.length > 0 && UI_Designs.map((item, index) => (
            <div className={style.item} key={index}>
              <img
                className={style.item_image}
                src={item.img}
                alt='item.img'
              />

              <div className={style.item_title}>
                {item.title}
              </div>

              <div className={style.item_description}>
                {item.description}
              </div>

              <div className={style.item_links}>
                {
                  item.app_link &&
                  <Link
                    to={item.app_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                }

                {
                  item.code_link &&
                  <Link
                    to={item.code_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-code"></i>
                  </Link>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const BootStrapDesigns = () => {
  return (
    <div className={style.bootStrap_designs}>
      <h3 className={style.project_sections_title}>
        BootStrap Designs
      </h3>

      <div className={style.items}>
        {
          BootStrap_Designs.length > 0 && BootStrap_Designs.map((item, index) => (
            <div className={style.item} key={index}>
              <img
                className={style.item_image}
                src={item.img}
                alt='item.img'
              />

              <div className={style.item_title}>
                {item.title}
              </div>

              <div className={style.item_description}>
                {item.description}
              </div>

              <div className={style.item_links}>
                {
                  item.app_link &&
                  <Link
                    to={item.app_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                }

                {
                  item.code_link &&
                  <Link
                    to={item.code_link}
                    className='btn_1'
                  >
                    <i className="fa-solid fa-code"></i>
                  </Link>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects