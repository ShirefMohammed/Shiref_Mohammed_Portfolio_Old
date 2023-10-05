import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { ScrollToTop } from "./hooks";

import {
  Header,
  Footer,
} from './components';

import {
  Home,
  Skills,
  Projects,
  Contact,
  NoPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="app" id="app">
        <Header />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>


        <Footer />
      </div>

      {/* Scroll to top on every page */}
      <ScrollToTop />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;