export default function ColorButtons({ changeColor }) {
  const colors = ["Red", "Yellow", "Black", "Purple", "Green", "Blue", "White"];

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => changeColor(color.toLowerCase())}
          style={{
            backgroundColor: color.toLowerCase(),
            color: color === "Yellow" ? "black" : "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
