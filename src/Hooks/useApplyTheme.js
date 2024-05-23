const useApplyTheme = () => {
  let localStorageTheme = localStorage.getItem("theme");

  const applyTheme = (theme = localStorageTheme) => {
    if (theme !== "light" && theme !== "dark") {
      localStorage.setItem("theme", "dark");
      theme = "dark";
    }

    if (theme === "light") {
      document.documentElement.style.setProperty("--main", "#00a2ff");
      document.documentElement.style.setProperty("--text", "#1e202a");
      document.documentElement.style.setProperty("--textSoft", "#63687e");
      document.documentElement.style.setProperty("--bg", "#fff");
      document.documentElement.style.setProperty("--bgLighter", "#f5f7ff");
      document.documentElement.style.setProperty("--cardBg", "#f0f2fa");
      document.documentElement.style.setProperty("--cardBgHover", "#e0e2f0");
    } else {
      document.documentElement.style.setProperty("--main", "#00a2ff");
      document.documentElement.style.setProperty("--text", "#fff");
      document.documentElement.style.setProperty("--textSoft", "#8b97c6");
      document.documentElement.style.setProperty("--bg", "#1D2029");
      document.documentElement.style.setProperty("--bgLighter", "#1a1c28");
      document.documentElement.style.setProperty("--cardBg", "#252a41");
      document.documentElement.style.setProperty("--cardBgHover", "#343c56");
    }
  };

  return applyTheme;
};

export default useApplyTheme;
