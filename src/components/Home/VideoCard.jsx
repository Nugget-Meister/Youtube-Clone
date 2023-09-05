import React from 'react';
import { Link } from 'react-router-dom';


const VideoCard = ({ video }) => {

// console.log(video.snippet.thumbnails.default.url)
let videoId = video.id.videoId

    return (
        <div className="videoCard">
            <Link to={`/Show/${videoId}`}>
                <img src= {video.snippet.thumbnails.default.url}/>
            </Link>
            <h3>{video.snippet.title} </h3>
            <p>id: {videoId}</p>
            <p>channel title: {video.snippet.channelTitle} </p>
        </div>
    );
}

export default VideoCard;
