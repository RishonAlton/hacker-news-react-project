import React, { useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"

import {
    SET_LOADING,
    SET_NEWS,
    REMOVE_ITEM,
    HANDLE_SEARCH,
    HANDLE_PAGE
} from "./actions"


const AppContext = React.createContext()

const baseURL = "https://hn.algolia.com/api/v1/search?"

const initalState = {
    isLoading: true,
    hits: [],
    query: "react",
    page: 0,
    nbPages: 0
} 


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState)

    const fetchNews = async (url) => {
        dispatch({type: SET_LOADING})
        try {
            const response = await fetch(url)
            const data = await response.json()
            dispatch({ type: SET_NEWS, payload: {hits: data.hits, nbPages: data.nbPages} })
        } 
        catch (error) {
            console.log(error)
        }
    }

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id })
    }

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query })
    }

    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value })
    }

    useEffect(() => {
        fetchNews(`${baseURL}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider 
            value={{
                ...state,
                removeItem,
                handleSearch,
                handlePage
            }}
        >
            {children}
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export {
    AppProvider,
    useGlobalContext
}