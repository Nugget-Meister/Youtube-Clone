import React from 'react';
import { useState } from 'react';

import { getSearchResults } from '../common/helper';

const Searchbar = () => {

    const [ searchQuery, updateSearchQuery ] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        let result = getSearchResults(searchQuery)
        console.log(searchQuery)
        console.log(result)
    }
    
    const handleTextChange = (e) => {
        updateSearchQuery(e.target.value)
    }

    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={handleTextChange}/>
                    <input type="submit"/>
                </form>
        </div>
    );
}

export default Searchbar;
