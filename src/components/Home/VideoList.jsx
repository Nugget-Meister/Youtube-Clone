import React, {useState} from 'react';


const URL = `${import.meta.env.VITE_BASE_API_KEY}`;

const API_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${URL}`;

const fetchVideos = async () => {
    const response = await fetch(API_URL)
    const videos = await response.json();
    return videos;
}   
    

const VideoList = () => {
    const [videos, setVideos] = useState([])
    fetchVideos().then(videos => {setVideos(videos)})

    return (
        <div>
            {videos.map((video) => {
                <h3>{video}</h3>
            })}
        </div>
    );
}

export default VideoList;
