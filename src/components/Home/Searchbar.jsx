import React from 'react';
import { useState } from 'react';
import { getSearchResults } from '../common/helper';



const Searchbar = ({updateResultState}) => {

    const [ searchQuery, updateSearchQuery ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(searchQuery)
        
        if(updateResultState){
            getSearchResults(searchQuery)
            .then((response) => {
                updateResultState(response)
            })
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
