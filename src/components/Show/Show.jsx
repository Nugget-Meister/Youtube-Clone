import React from 'react';
import Video from './Video';
import CommentSection from './CommentSection';

import { useParams } from 'react-router-dom';

const Show = () => {

let {id} = useParams()

    return (
        <div className='Show'>
            <Video/>
            <CommentSection/>
        </div>
    );
}

export default Show;
