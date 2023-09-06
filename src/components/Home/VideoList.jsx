import React, {useState} from 'react';
import VideoCard from './VideoCard';
import "/src/components/Home/VideoList.css"


const VideoList = ({ resultState }) => {

    return (
        <div className="VideoList">
            {resultState.map((item) => {return (<VideoCard video= {item}/>)})}
        </div>
    );
}

export default VideoList;
