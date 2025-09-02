import { useState } from "react";

import ColorButtons from "./components/ColorButtons";

import "./styles.css";

export default function App() {
  const [color, setColor] = useState("white");

  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Background Color Changer</h1>
      <ColorButtons changeColor={changeColor} />
    </div>
  );
}
