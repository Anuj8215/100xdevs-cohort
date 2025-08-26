import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <div style={{ background: "Black", tabSize: "10px", color: "white" }}>
        <button onClick={() => (window.location.href = "/landing")}>
          Go to Landing
        </button>
        <br />
        <br />
        <br />
        <button onClick={() => (window.location.href = "/dashboard")}>
          {" "}
          Go to Dashboard
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
