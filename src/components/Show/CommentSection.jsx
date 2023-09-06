import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([])
    const [input, setInput] = useState({
        name: "", 
        comment: "",
    });

    function resetForm() {
        setInput({
            name: "",
            comment: "",
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        setComments([
            ...comments,
            input,
        ])
        resetForm();
    }

    function handleTextChange(e) {
        setInput({
            ...input,
            [e.target.id]: e.target.value 
        });
    }

   
    return (
        <div className="commentSection">
            <form onSubmit={handleSubmit} className="submitComment">
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={input.name}
                    onChange={handleTextChange}
                    required
                />
                < br />

                <label htmlFor="comment">Comment:</label>
                <input
                    type="text"
                    id="comment"
                    value={input.comment}
                    onChange={handleTextChange}
                    required
                />
                < br />

                <input type="submit" />
            </form>
            < br />

            <div className="comments">
                {comments.map((comment) => {
                    return (
                        <>
                            <h3>{comment.name}</h3>
                            <p>{comment.comment}</p>
                        </>)
                })}

            </div>

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
