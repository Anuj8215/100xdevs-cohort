interface VideoCardProps {
    title: string;
    image: string;
    thumbImage: string;
    author: string;
    views: string;
    timestamp: string;
}

export default function VideoCard(props: VideoCardProps) {
    return (
        <div className="cursor-pointer hover:bg-gray-900 p-2 rounded-lg transition-colors">
            {"Hello There"}
            <div className="relative">
                <img src={props.image} className="w-full h-48 object-cover rounded-xl" alt="thumbnail" />
                {}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    10:30
                </div>
            </div>
            
            {/* Video info */}
            <div className="grid grid-cols-12 pt-3">
                <div className="col-span-2">
                    <img className="rounded-full w-9 h-9" src={props.thumbImage} alt="channel" />
                </div>
                <div className="col-span-10 pl-3">
                    <div className="text-white font-medium text-sm line-clamp-2 leading-5">
                        {props.title}
                    </div>
                    <div className="text-gray-400 text-sm mt-1 hover:text-white cursor-pointer">
                        {props.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                        {props.views} views • {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    );
}