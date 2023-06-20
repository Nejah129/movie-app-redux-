import { moviesData } from "../data";
import { ADD, DELETE, EDIT_MOVIE } from "./actionTypes";



const init={
    movies:moviesData
}

export const movieReducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            
            return {
                ...state,movies:state.movies.filter(el=>el.id!==payload)
            }
        case ADD:
            return {
                ...state,movies:[...state.movies,payload]
            }
            case EDIT_MOVIE:
                return {
                    ...state,movies:state.movies.map(el=>el.id===payload.id?payload:el)
                }
        default:
            return state
    }
}