import React from 'react';


const VideoCard = ({ video }) => {
console.log(video.snippet.thumbnails.default.url)
    return (
        <div className="videoCard">
            <img src= {video.snippet.thumbnails.default.url}/>
            <h3>{video.snippet.title} </h3>
            <p>id: {video.id.videoId}</p>
            <p>channel title: {video.snippet.channelTitle} </p>
        </div>
    );
}

export default VideoCard;
