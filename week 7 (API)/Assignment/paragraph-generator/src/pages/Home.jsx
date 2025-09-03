import React, { useState } from "react";
import Paragraph from "../components/Paragraph";

function Home() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h2>Home Page</h2>
      <Paragraph count={count} setCount={setCount} />
    </div>
  );
}

export default Home;
