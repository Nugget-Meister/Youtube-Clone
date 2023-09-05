import React from 'react';
//onsubmit 
// If a user leaves either the name or comment field blank, an error message should be shown and a comment should not be created.


const CommentSection = () => {
    
    function handleSubmit()
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="Name"/>
                <input type="text" id="Comment" />
                <input type="submit" />
            </form>;
        </div>
    );
}

export default CommentSection;
