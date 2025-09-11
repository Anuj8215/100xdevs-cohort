import React from 'react';

interface Video {
    id: string;
    title: string;
    thumbnail: string;
    channel: string;
    views: string;
    timestamp: string;
}

interface VideoGridProps {
    videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                    <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                            {video.title}
                        </h3>
                        <p className="text-gray-600 text-xs mb-1">{video.channel}</p>
                        <p className="text-gray-500 text-xs">
                            {video.views} • {video.timestamp}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoGrid;