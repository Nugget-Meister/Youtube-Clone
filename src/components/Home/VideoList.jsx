import React, {useState} from 'react';
import VideoCard from './VideoCard';


const VideoList = ({ resultState }) => {

    return (
        <div className="videoList">
            {resultState.map((item) => {return (<VideoCard video= {item}/>)})}
        </div>
    );
}

export default VideoList;
