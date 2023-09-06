import React from 'react';
import { useState } from 'react';
import { getSearchResults } from '../common/helper';



const Searchbar = ({updateResultState}) => {

    const [ searchQuery, updateSearchQuery ] = useState('')
    const [ errorFound, updateErrorFound ] = useState({
        isError: false,
        errorCode: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log(searchQuery)
        
        if(updateResultState){
            getSearchResults(searchQuery)
            .then((response) => {
                // console.log(response)
                if(typeof response != "number") {
                    updateResultState(response)
                    updateErrorFound(false)
                } else {
                    updateErrorFound({
                        isError: true,
                        errorCode: response
                    })
                }    
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
                {errorFound.isError ? (
                <div className='error'>
                    <h1>An error has occurred!</h1>
                    <h2>Error Code: {errorFound.errorCode}</h2>
                </div>
                ): null}
        </div>
    );
}

export default Searchbar;
