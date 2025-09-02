import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function Preview() {
  const { profile } = useContext(ProfileContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Profile Preview</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          maxWidth: "300px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {profile.image ? (
          <img
            src={profile.image}
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
        ) : (
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#eee",
              display: "inline-block",
              marginBottom: "10px",
            }}
          />
        )}
        <h2>{profile.name || "Your Name"}</h2>
        <p>{profile.email || "your.email@example.com"}</p>
        <p>{profile.bio || "Your bio will appear here."}</p>
      </div>
    </div>
  );
}
