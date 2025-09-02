import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    image: "",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
