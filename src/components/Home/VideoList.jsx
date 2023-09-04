import React, {useState} from 'react';


const VideoList = ({ resultState }) => {

    return (
        <div>
            {resultState.map((item) => {<VideoCard video= {item}/>})}
        </div>
    );
}

export default VideoList;
