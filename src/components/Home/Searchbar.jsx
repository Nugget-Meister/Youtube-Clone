import React from 'react';
import { useState } from 'react';
import { getSearchResults } from '../common/helper';
import "/src/components/Home/Searchbar.css"


const Searchbar = ({updateResultState}) => {
    const [ searchQuery, updateSearchQuery ] = useState({
        search: "",
        amount: "4",
    })

    const [ errorFound, updateErrorFound ] = useState({
        isError: false,
        errorCode: 0
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(updateResultState){
            getSearchResults(searchQuery.search,searchQuery.amount)
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
        updateSearchQuery({
            ...searchQuery,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className='Searchbar'>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={searchQuery.search}
                        onChange={handleTextChange}
                        id='search'
                        placeholder='Search'
                        required/>
                    <input 
                        type="number" 
                        value={searchQuery.amount}
                        onChange={handleTextChange}
                        id="amount" 
                        min="4"
                        max="8"
                        />
                    <input type="submit" value="🔎"/>
                </form>
                <br />
                {errorFound.isError ? (
                    <>
                        <div className='error'>
                            <h1>An error has occurred!</h1>
                            <h2>Error Code: {errorFound.errorCode}</h2>
                        </div>
                    </>
                ): null}
        </div>
    );
}

export default Searchbar;
