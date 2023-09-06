import React, {useState} from 'react';
import VideoCard from './VideoCard';


const VideoList = ({ resultState }) => {

    console.log(resultState.length > 0)
    return (
        <div className="videoList">
            {
                resultState.length > 0 ? 
                resultState.map((item) => {return (<VideoCard video= {item}/>)})
                : <span className='searchpls'>Make a search to see some results!</span>
            }
        </div>
    );
}

export default VideoList;
