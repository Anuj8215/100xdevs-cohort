import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { profileState } from "./profileState";

const UserInfo = () => {
  const profile = useRecoilValue(profileState);
  const setProfile = useSetRecoilState(profileState);

  const handleNameChange = (newName) => {
    setProfile(prev => ({
      ...prev,
      name: newName
    }));
  };

  const handleLocationChange = (newLocation) => {
    setProfile(prev => ({
      ...prev,
      location: newLocation
    }));
  };

  const handleImageChange = (newImage) => {
    setProfile(prev => ({
      ...prev,
      image: newImage
    }));
  };

  return (
    <div className="user-info-editor">
      <h3>Edit Profile Information</h3>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={profile.name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          value={profile.location}
          onChange={(e) => handleLocationChange(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="image">Profile Image URL:</label>
        <input
          id="image"
          type="url"
          value={profile.image}
          onChange={(e) => handleImageChange(e.target.value)}
          className="form-input"
          placeholder="https://example.com/image.jpg"
        />
      </div>
    </div>
  );
};

export default UserInfo;