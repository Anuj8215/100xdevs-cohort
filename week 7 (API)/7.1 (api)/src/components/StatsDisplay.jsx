import React from "react";
import { useRecoilValue } from "recoil";
import { profileState } from "./profileState";

const StatsDisplay = () => {
  const profile = useRecoilValue(profileState);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const stats = [
    {
      label: "Followers",
      value: profile.stats.followers,
      icon: "👥"
    },
    {
      label: "Likes", 
      value: profile.stats.likes,
      icon: "❤️"
    },
    {
      label: "Photos",
      value: profile.stats.photos,
      icon: "📷"
    }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-number">
            {stat.icon} {formatNumber(stat.value)}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsDisplay;