import React from "react";
import "./styles/main.css";
import "./styles/reset.css";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Nav  from "./components/navBar/Nav";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer/Footer";
import { Project } from "./pages/Project";
import ScrollToTop from "./utils/Scroll";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
      <Nav></Nav>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/project/:id" element={<Project />} />
          <Route  path="/projects" element={<Projects />} />
          <Route  path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
export default App;
