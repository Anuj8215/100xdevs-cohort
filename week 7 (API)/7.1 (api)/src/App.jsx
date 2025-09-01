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
//--------------------------Context API For Prop Drilling--------------------------//
import { useState } from "react";
import { CountContext } from "./components/context";

function App() {
  const [count, setCount] = useState(0);

  //NOTE - Wrap anyone that wants to use the teleported value inside the provider
  return (
    <div>
    <CountContext.provider value={count}>
    <Count count={count} setCount={setCount} />
    </CountContext.provider>
      
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function CountRenderer({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => { setCount(count + 1); }} > {" "} Increase{" "} </button>
      <button onClick={() => { setCount(count - 1); }} > {" "} Decrease{" "} </button>
    </div>
  );
}

export default App;
