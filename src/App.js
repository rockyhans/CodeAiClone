import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Visit from "./components/Visit";
import CCompilerVisit from "./components/CCompilerVisit";
import JavaCompilerVisit from "./components/JavaCompilerVisit";
import PythonCompilerVisit from "./components/PythonCompilerVisit";
import CppCompilerVisit from "./components/CppCompilerVisit";
import Home from "./components/Home";
import Use from "./components/Use";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/CCompilerVisit" element={<CCompilerVisit />} />
        <Route path="/JavaCompilerVisit" element={<JavaCompilerVisit />} />
        <Route path="/PythonCompilerVisit" element={<PythonCompilerVisit />} />
        <Route path="/CppCompilerVisit" element={<CppCompilerVisit />} />
        <Route path="/Use" element={<Use />} />
        <Route path="/About" element={<About />} />


      </Routes>
    </Router>
  );
};

export default App;
