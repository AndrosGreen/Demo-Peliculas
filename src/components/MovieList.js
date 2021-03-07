import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    
    //const deleteMovie  = (id) => console.log("delete movie id: " + id);

    const movies = props.movies.map((movie) => {
        return (
            <Movie
                key = {movie.idPelicula}
                id = {movie.idPelicula}
                nombre = {movie.nombre}
                rating = {movie.rating}
                handleOpen = {props.handleOpen}
            />
        );
    });
    return <div className>{movies}</div>
};

export default MovieList;