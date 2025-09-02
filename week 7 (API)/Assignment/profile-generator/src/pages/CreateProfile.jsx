import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function CreateProfile() {
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Create Profile</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <textarea
          placeholder="Enter Bio"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={profile.image}
          onChange={(e) => setProfile({ ...profile, image: e.target.value })}
        />
      </div>
    </div>
  );
}
