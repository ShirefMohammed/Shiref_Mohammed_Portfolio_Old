import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import useApplyTheme from "./Hooks/useApplyTheme";
import { Header, Footer } from "./components";
import { Home, Project, Projects, NotFoundPage } from "./pages";

function App() {
  const { pathname } = useLocation();
  const applyTheme = useApplyTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    applyTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
