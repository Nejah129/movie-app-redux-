import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const {movies}=useSelector(state=>state)
  return (
    <div className='movie-list' >
        {
            React.Children.toArray(movies.map(el=><MovieCard movie={el} />))
        }
    </div>
  )
}

export default MovieList