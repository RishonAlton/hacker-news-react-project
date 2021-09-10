import {
    SET_LOADING,
    SET_NEWS,
    REMOVE_ITEM,
    HANDLE_SEARCH,
    HANDLE_PAGE
} from "./actions"


const reducer = (state, action) => {

    switch(action.type) {
        case SET_LOADING: 
            return { ...state, isLoading: true }
        case SET_NEWS: 
            return { ...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages }
        case REMOVE_ITEM: 
            return { ...state, hits: state.hits.filter(item => item.objectID !== action.payload) }
        case HANDLE_SEARCH: 
            return { ...state, query: action.payload, page: 0 }
        case HANDLE_PAGE: 
            if (action.payload === "next") {
                let nextPage = state.page + 1
                if (nextPage > state.nbPages - 1) {
                    nextPage = 0
                }
                return { ...state, page: nextPage }
            }
            if (action.payload === "previous") {
                let previousPage = state.page - 1
                if (previousPage < 0) {
                    previousPage = state.nbPages - 1
                }
                return { ...state, page: previousPage }
            }
        default: 
            throw new Error(`No Matching ${action.type} Action Type`)
    }

}


export default reducer