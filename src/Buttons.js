import React from 'react'
import { useGlobalContext } from './context'


const Buttons = () => {

    const { isLoading, page, nbPages, handlePage } = useGlobalContext()

    return (
        <div className="buttons-container">
            <button 
                disabled={isLoading} 
                className="button"
                onClick={() => handlePage("previous")}
            >
                Previous
            </button>
            <p className="page">
                { page + 1 } of { nbPages }
            </p>
            <button 
                disabled={isLoading} 
                className="button"
                onClick={() => handlePage("next")}
            >
                Next
            </button>
        </div>
    )

}


export default Buttons
