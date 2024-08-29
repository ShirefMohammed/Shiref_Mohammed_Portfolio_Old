import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useApplyTheme from "../../Hooks/useApplyTheme";
import style from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const applyTheme = useApplyTheme();

  const toggleTheme = () => {
    let localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme === "light") {
      localStorage.setItem("theme", "dark");
      localStorageTheme = "dark";
    } else {
      localStorage.setItem("theme", "light");
      localStorageTheme = "light";
    }

    setTheme(localStorageTheme);
    applyTheme(localStorageTheme);
  };

  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        My Portfolio
      </Link>

      <ul className={style.links}>
        <li>
          <Link to="/" className={pathname === "/" ? style.active : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={pathname === "/projects" ? style.active : ""}
          >
            Projects
          </Link>
        </li>
      </ul>

      <button
        onClick={toggleTheme}
        className={`${style.theme_button} 
          ${theme === "dark" ? style.dark : ""}`}
      ></button>
    </header>
  );
};

export default Header;
