import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <div className="videoCard">
            <img url= {video.snippet.thumbnails.default.URL}></img>
            <h3>{video.snippet.title} </h3>
            <p>id: {video.id.videoId}</p>
            <p>channel title: {video.snippet.channelTitle} </p>
        </div>
    );
}

export default VideoCard;
