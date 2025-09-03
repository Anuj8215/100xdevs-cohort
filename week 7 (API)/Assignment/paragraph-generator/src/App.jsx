import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import React, { Suspense } from "react";

const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <h1>Paragraph Generator</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
