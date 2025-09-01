//--------------------------Routing in React App--------------------------//
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

// function App() {
//   return (
//     <div>
//       <div style={{ background: "Black", tabSize: "10px", color: "white" }}>
//         <button onClick={() => (window.location.href = "/landing")}>
//           Go to Landing
//         </button>
//         <br />
//         <br />
//         <br />
//         <button onClick={() => (window.location.href = "/dashboard")}>
//           {" "}
//           Go to Dashboard
//         </button>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/landing" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

//--------------------------Routing in React Using useNavigate()--------------------------//

// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import "./App.css";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <NavButtons />
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
// NOTE - Created a separate component for Navigation Buttons
// function NavButtons() {
//   const navigate = useNavigate(); // used to navigate programmatically
//   return (
//     <>
//       <div>
//         <button onClick={() => navigate("/")}>Landing</button>
//       </div>
//       <div>
//         <button onClick={() => navigate("/dashboard")}>Dashboard</button>
//       </div>
//     </>
//   );
// }

// export default App;
//--------------------------Lazy Loading--------------------------//
// import React from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import "./App.css";
// import { lazy, Suspense } from "react";

// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <NavButtons />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"Loading...."}>
//                 {" "}
//                 <Landing />{" "}
//               </Suspense>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"Loading...."}>
//                 {" "}
//                 <Dashboard />{" "}
//               </Suspense>
//             }
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
//NOTE - Created a separate component for Navigation Buttons
// function NavButtons() {
//   const navigate = useNavigate(); // used to navigate programmatically
//   return (
//     <>
//       <div>
//         <button onClick={() => navigate("/")}>Landing</button>
//       </div>
//       <div>
//         <button onClick={() => navigate("/dashboard")}>Dashboard</button>
//       </div>
//     </>
//   );
// }

// export default App;

//--------------------------Prop Drilling--------------------------//
// import { useState } from "react";
// function App() {
//   const [counterValue, setCounterValue] = useState(0);
//   return (
//     <div>
//       <Count value={counterValue} />
//       <Buttons value={counterValue} updateValue={setCounterValue} />
//     </div>
//   );
// }
// function Count({ value }) {
//   return <div>{value}</div>;
// }
// function Buttons({ value, updateValue }) {
//   return (
//     <>
//       <button onClick={() => updateValue(value + 1)}>Increment</button>
//       <button onClick={() => updateValue(value - 1)}>Decrement</button>
//     </>
//   );
// }
// export default App;
//--------------------------Profile Generator Application--------------------------//
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";

// Lazy load components for better performance
const ProfileGenerator = lazy(() => import("./components/ProfileGenerator"));
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="app">
          <NavButtons />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div className="loading">Loading...</div>}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<div className="loading">Loading...</div>}>
                  <ProfileGenerator />
                </Suspense>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<div className="loading">Loading...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

function NavButtons() {
  const navigate = useNavigate();
  return (
    <nav className="nav-buttons">
      <button onClick={() => navigate("/")} className="nav-btn">
        Home
      </button>
      <button onClick={() => navigate("/profile")} className="nav-btn">
        Profile Generator
      </button>
      <button onClick={() => navigate("/dashboard")} className="nav-btn">
        Dashboard
      </button>
    </nav>
  );
}

export default App;
