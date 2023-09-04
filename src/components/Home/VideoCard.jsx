import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <div className="videoCard">
            <h3> {video.title} </h3>
        </div>
    );
}

export default VideoCard;
