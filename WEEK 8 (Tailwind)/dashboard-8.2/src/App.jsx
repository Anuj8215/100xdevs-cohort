/*
import React from 'react';
import './index.css';

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-500">Hi Anuj</div>
        <div className="bg-blue-500">Hi Anuj</div>
        <div className="bg-cyan-400">Hi Anuj</div>
      </div>
      <div className="flex">
        <div className="bg-red-500">Hi Anuj</div>
        <div className="bg-blue-500">Hi Anuj</div>
        <div className="bg-cyan-400">Hi Anuj</div>
      </div>
    </>
  )
}

export default App;

*/

import React from "react";
import "./index.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      <RevenueCard
        title={"Total Revenue"}
        orderCount={345}
        amount={"$23,456"}
      />
    </>
  );
}

export default App;