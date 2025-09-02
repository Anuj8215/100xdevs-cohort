import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";
import Preview from "./pages/Preview";
import About from "./pages/About";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
      <Navbar currentPage={page} onNavigate={setPage} />
      <div style={{ padding: 20 }}>
        {page === "home" && <Home />}
        {page === "create" && <CreateProfile />}
        {page === "preview" && <Preview />}
        {page === "about" && <About />}
      </div>
    </div>
  );
}
