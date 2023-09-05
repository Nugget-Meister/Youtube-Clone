import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube'

// ZP8d6C7wPZE

const Video = () => {

    let {id} = useParams()

    let client = (
        <YouTube
        videoId={id}/>
    )
    

    return (
        <>
            <div id="player">
                {client}
            </div>
           
        </>
    );
}

export default Video;
