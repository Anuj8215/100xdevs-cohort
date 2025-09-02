export default function Navbar({ currentPage, onNavigate }) {
  return (
    <nav
      style={{
        background: "#333",
        color: "#fff",
        padding: "10px 20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <button
        onClick={() => onNavigate("home")}
        style={{ color: currentPage === "home" ? "yellow" : "#fff" }}
      >
        Home
      </button>
      <button
        onClick={() => onNavigate("create")}
        style={{ color: currentPage === "create" ? "yellow" : "#fff" }}
      >
        Create
      </button>
      <button
        onClick={() => onNavigate("preview")}
        style={{ color: currentPage === "preview" ? "yellow" : "#fff" }}
      >
        Preview
      </button>
      <button
        onClick={() => onNavigate("about")}
        style={{ color: currentPage === "about" ? "yellow" : "#fff" }}
      >
        About
      </button>
    </nav>
  );
}
