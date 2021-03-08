import React from 'react';
import apiPeliculas from './api/apiPeliculas';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDeleteModal from './modals/MovieDeleteModal';
import MovieUpdateModal from './modals/MovieUpdateModal';

class App extends React.Component {

    state = { 
        movies : [], 
        term: '', 
        showUpdate: false,
        showDelete: false, 
        idMovie : 0, 
        movieNombre : '',
        movieRating : '',
        _movieIdU: 0,
        _movieNombreU: '',
        _movieRatingU: ''
    };

    getPeliculas = async (event) => {
        event.preventDefault();
        const response = await apiPeliculas.get('peliculas',{
          params: {}
        });
        console.log(response.data);
        this.setState( {movies : response.data} );
    }

    getMovieByID = async (id) => {
        const response = await apiPeliculas.get('pelicula/' + id,{
            params: {}
        });
        let actMovie = response.data;
        this.setState( {_movieIdU: actMovie.idPelicula, _movieNombreU: actMovie.nombre, _movieRatingU: actMovie.rating} );
        console.log(actMovie);
    }

    insertMovie = async (event) => {
        event.preventDefault();
        //console.log(this.state.movieNombre);
        //console.log(this.state.movieRating);
        const response = await apiPeliculas.post('/add',{
            nombre : this.state.movieNombre,
            rating : this.state.movieRating
        });
        console.log(response.data);
        this.loadMovies();
    }

    loadMovies = async () => {
        const response = await apiPeliculas.get('peliculas',{
          params: {}
        });
        console.log(response.data);
        this.setState( {movies : response.data} );
    }

    deleteMovie = async (idMovie) => {
        const response = await apiPeliculas.get('delete/' + idMovie,{
          params: {}
        });
        console.log(response.data);
        console.log(idMovie);
        this.loadMovies();
        
        this.handleClose();
    }
    
    // handle modal
    
    handleCloseDelete = () => this.setState({showDelete:false});
    handleOpenDelete = (id) => { 
        this.setState({showDelete:true, idMovie : id});
    }

    handleCloseUpdate = () => this.setState({showUpdate:false});
    handleOpenUpdate = (id) => {
        this.getMovieByID(id);
        this.setState({showUpdate: true});
    } 


    render (){
        return (
          <div className="container" style={{marginTop: "20px"}}>

            <form onSubmit={this.insertMovie}>
                <h3>Agregar Pelicula:</h3>

                <h5>Nombre</h5>
                <input
                    className="form-control"
                    onChange = {(e) => this.setState( { movieNombre : e.target.value } )}
                    value = {this.state.movieNombre }
                />

                <h5>Rating</h5>
                <input
                    className="form-control"
                    onChange = {(e) => this.setState( { movieRating : e.target.value} )}
                    value = {this.state.movieRating}
                />

                <button className="btn btn-primary" style={{margin: "5px"}}> Add Movie </button>
            </form>
            
            <button className="btn btn-primary" onClick={this.loadMovies} style={{margin: "5px"}}> Show All </button>
            <button className="btn btn-primary" onClick={() => this.getMovieByID(14)} style={{margin: "5px"}}> Modal </button>
            
            <MovieList 
                movies = {this.state.movies} 
                handleOpenDelete={this.handleOpenDelete}
                handleOpenUpdate ={this.handleOpenUpdate}
            />

            <MovieDeleteModal 
                show = {this.state.showDelete} 
                handleClose = {this.handleCloseDelete}
                deleteMovie = {this.deleteMovie}
                idMovie = {this.state.idMovie}
            />

            <MovieUpdateModal
                show = {this.state.showUpdate}
                handleClose = {this.handleCloseUpdate}
                id = {this.state._movieIdU}
                nombre = {this.state._movieNombreU}
                rating = {this.state._movieRatingU}
            />

          </div>

        );
    }

}

export default App;