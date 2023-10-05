import { useEffect } from 'react';
import { Link } from "react-router-dom";
import style from './Header.module.css';

const Header = () => {
  useEffect(() => {
    // Theme Mode
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    imply_theme();
  }, [])

  // When Click on theme_btn
  function theme_btn_action() {
    let theme = localStorage.getItem('theme');

    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
    }

    imply_theme();
  }

  function imply_theme() {
    let theme = localStorage.getItem('theme');
    let theme_btn = document.getElementById('theme_btn');

    if (theme === 'light') {
      document.documentElement.style.setProperty("--theme", "light");
      document.documentElement.style.setProperty("--color-bg", "#fff");
      document.documentElement.style.setProperty("--color-bg-header", "#f5f7ff");
      document.documentElement.style.setProperty("--color-bg-second", "#f5f7ff");
      document.documentElement.style.setProperty("--color-bg-card", "#f0f2fa");
      document.documentElement.style.setProperty("--color-bg-card-hover", "#e0e2f0");
      document.documentElement.style.setProperty("--main-color", "#00a2ff");
      document.documentElement.style.setProperty("--color-foreground", "#1e202a");
      document.documentElement.style.setProperty("--color-muted", "#63687e");
      theme_btn.classList.remove(style.on_dark_mode);
    } else if (theme === 'dark') {
      document.documentElement.style.setProperty("--theme", "dark");
      document.documentElement.style.setProperty("--color-bg", "#1D2029");
      document.documentElement.style.setProperty("--color-bg-header", "#1a1c28");
      document.documentElement.style.setProperty("--color-bg-second", "#20222F");
      document.documentElement.style.setProperty("--color-bg-card", "#252a41");
      document.documentElement.style.setProperty("--color-bg-card-hover", "#343c56");
      document.documentElement.style.setProperty("--main-color", "#00a2ff");
      document.documentElement.style.setProperty("--color-foreground", "#fff");
      document.documentElement.style.setProperty("--color-muted", "#8b97c6");
      theme_btn.classList.add(style.on_dark_mode);
    }
  }

  // When Click on bars_and_x_mark Div
  function handle_bars_and_x_mark() {
    document.getElementById("bars").classList.toggle(style.d_none);
    document.getElementById("x-mark").classList.toggle(style.d_none);
    document.getElementById("links").classList.toggle(style.hide_in_left_sm);
  }

  return (
    <header className={style.header} id="header">
      <div className="container">
        <div className={style.content}>
          <div className={style.logo}>
            <Link to='/'>
              My Portfolio
            </Link>
          </div>

          <div
            className={`${style.links} ${style.hide_in_left_sm}`}
            id='links'
          >
            <li>
              <Link
                to="/"
                className={style.active}
                onClick={handle_bars_and_x_mark}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handle_bars_and_x_mark}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={handle_bars_and_x_mark}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handle_bars_and_x_mark}
              >
                Contact
              </Link>
            </li>
          </div>

          <div className={style.mode}>
            <span>Dark Mode</span>
            <button id="theme_btn" onClick={theme_btn_action}></button>
            <div
              className={style.bars_and_x_mark}
              onClick={handle_bars_and_x_mark}
            >
              <div className={style.bars} id="bars">
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className={`${style.x_mark} ${style.d_none}`} id="x-mark">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header