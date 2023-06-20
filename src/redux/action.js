import { ADD, DELETE, EDIT_MOVIE } from "./actionTypes"



export const handleDelete=(ID)=>{
    return{
        type:DELETE,
        payload:ID
    }
}

export const handleAdd=(newMovie)=>{
    return{
        type:ADD,
        payload:newMovie
    }
}

export const handleEdit=(editedMovie)=>{
    return {
        type:EDIT_MOVIE,
        payload:editedMovie
    }
}