import React from 'react';
import { useState } from 'react';

import { getSearchResults } from '../common/helper';

/**
 * 
 * @param {*} updateResultState - pass through the function here to update the state for our search results
 * @returns 
 */


const Searchbar = ({updateResultState}) => {

    const [ searchQuery, updateSearchQuery ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchQuery)
        
        if(updateResultState){
            let result = getSearchResults(searchQuery)
    
            console.log(result)
            updateResultState(result)
        } else {
            console.error("Result state has not been passed validly.")
        }
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
