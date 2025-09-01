import { atom } from "recoil";

// Profile state with sample data
export const profileState = atom({
  key: "profileState",
  default: {
    name: "Alex Johnson",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    stats: {
      followers: 2847,
      likes: 15632,
      photos: 432
    }
  }
});

// Loading state
export const loadingState = atom({
  key: "loadingState",
  default: false
});