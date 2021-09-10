import React from 'react'
import { useGlobalContext } from './context'


const Search = () => {

    const { query, handleSearch } = useGlobalContext()

    return (
        <section className="search-section">
            <h2 className="main-title">Search Hacker News</h2>
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    className="search-input" 
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </form>
        </section>
    )

}


export default Search
