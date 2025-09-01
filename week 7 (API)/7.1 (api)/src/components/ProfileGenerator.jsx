import React, { Suspense } from "react";
import ProfileHeader from "./ProfileHeader";
import StatsDisplay from "./StatsDisplay";
import UserInfo from "./UserInfo";

const ProfileGenerator = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <Suspense fallback={<div className="loading">Loading profile...</div>}>
          <ProfileHeader />
          <StatsDisplay />
        </Suspense>
      </div>
      
      <div className="profile-card">
        <Suspense fallback={<div className="loading">Loading editor...</div>}>
          <UserInfo />
        </Suspense>
      </div>
      
      <div className="profile-card">
        <h3>Profile Generator Features</h3>
        <ul className="features-list">
          <li>✅ Responsive design with modern UI</li>
          <li>✅ Real-time profile editing</li>
          <li>✅ State management with Recoil</li>
          <li>✅ Lazy loading for optimal performance</li>
          <li>✅ Turquoise and white color scheme</li>
          <li>✅ Component-based architecture</li>
          <li>✅ Mobile-friendly responsive layout</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileGenerator;