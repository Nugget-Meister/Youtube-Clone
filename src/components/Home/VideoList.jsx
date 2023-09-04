import React, {useState} from 'react';



const VideoList = () => {


    return (
        <div>
            {videos.map((video) => {
                <h3>{video}</h3>
            })}
        </div>
    );
}

export default VideoList;
