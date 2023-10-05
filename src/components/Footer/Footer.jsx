import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.content}>
          <ul className={style.links}>
            <li>
              <Link
                to='https://www.instagram.com/shiref_nohammed/'
                className='btn_1'
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                to='https://www.linkedin.com/in/shiref-mohammed-57342624b/'
                className='btn_1'
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link
                to='https://github.com/ShirefMohammed'
                className='btn_1'
              >
                <i className="fa-brands fa-github"></i>
              </Link>
            </li>
          </ul>

          <div className={style.copy_right}>
            Copyright &copy; 2023 created by shiref mohammed 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer