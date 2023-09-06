import React from 'react';
import { Link } from 'react-router-dom';


const VideoCard = ({ video }) => {

// console.log(video.snippet.thumbnails.default.url)
let videoId = video.id.videoId

    return (
        <div className="VideoCard">
            <Link to={`/Show/${videoId}`}>
                <img src= {video.snippet.thumbnails.medium.url}/>
            </Link>
            <h3>{video.snippet.title} </h3>
            <p>Channel title: {video.snippet.channelTitle} </p>
        </div>
    );
}

export default VideoCard;
