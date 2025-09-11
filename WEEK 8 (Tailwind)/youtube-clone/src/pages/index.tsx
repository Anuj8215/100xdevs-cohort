import { Inter } from "next/font/google";
import VideoCard from "../components/videocard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* YouTube-like header */}
      <div className="bg-black border-b border-gray-800 p-4">
        <h1 className="text-2xl font-bold text-red-600">YouTube Clone</h1>
      </div>
      
      {/* Video grid container */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <VideoCard
            title={"This is my first video | Anuj Pawar"}
            image={"image.png"}
            thumbImage={"image.png"}
            author={"Anuj Pawar"}
            views={"1M"}
            timestamp={"1 day ago"}
          />
          <VideoCard
            title={"Building a React App from Scratch"}
            image={"image.png"}
            thumbImage={"image.png"}
            author={"Code Master"}
            views={"500K"}
            timestamp={"2 days ago"}
          />
          <VideoCard
            title={"Complete JavaScript Tutorial 2024"}
            image={"image.png"}
            thumbImage={"image.png"}
            author={"JS Ninja"}
            views={"2.3M"}
            timestamp={"1 week ago"}
          />
          <VideoCard
            title={"Next.js 14 Full Course"}
            image={"image.png"}
            thumbImage={"image.png"}
            author={"Web Dev Pro"}
            views={"800K"}
            timestamp={"3 days ago"}
          />
        </div>
      </div>
    </div>
  );
}
