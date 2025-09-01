import React from "react";
import { useRecoilValue } from "recoil";
import { profileState } from "./profileState";

const ProfileHeader = () => {
  const profile = useRecoilValue(profileState);

  return (
    <div className="profile-header">
      <img
        src={profile.image}
        alt={`${profile.name}'s profile`}
        className="profile-image"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150x150/26d0ce/white?text=User";
        }}
      />
      <h1 className="profile-name">{profile.name}</h1>
      <div className="profile-location">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        {profile.location}
      </div>
    </div>
  );
};

export default ProfileHeader;