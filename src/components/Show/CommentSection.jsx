import React, { useState } from 'react';

//onsubmit 
// If a user leaves either the name or comment field blank, an error message should be shown and a comment should not be created.


const CommentSection = () => {
    const [comment,setComment] = useState("")
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        setName (e.target.name.value)
        setComment (e.target.comment.value)
        console.log(comment)
        console.log(name)
    }
    
    return (
        <div className='commentSection'>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" />
                <input type="text" id="comment" />
                <input type="submit" />
            </form>;
            <h3>Mo</h3>
            <p>She aight</p>
            <h3>Emily</h3>
            <p>Great video!</p>
            <h3>Bob</h3>
            <p>Who's watching this in 2030?</p>
        </div>
    );
}

export default CommentSection;
