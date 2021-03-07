import React from 'react';
import apiPeliculas from './api/apiPeliculas';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDeleteModal from './modals/MovieDeleteModal';

class App extends React.Component {

    state = { movies : [], term:'', show: false, idMovie : 0 };

    getPeliculas = async (event) => {
        event.preventDefault();
        const response = await apiPeliculas.get('peliculas',{
          params: {}
        });
        console.log(response.data);
        this.setState( {movies : response.data} );
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
    handleClose = () => this.setState({show:false});
    handleOpen = (id) => { 
      this.setState({show:true, idMovie : id});
    }

    render (){
        return (
          <div className="container" style={{marginTop: "20px"}}>

            <form onSubmit={this.getPeliculas}>
              <h3>Agregar Pelicula:</h3>
                <input
                    className="form-control"
                    onChange = {(e) => this.setState({term: e.target.value})}
                    value = {this.state.term}
                />
                <button className="btn btn-primary" style={{margin: "5px"}}> Add Movie </button>
            </form>
            <button className="btn btn-primary" onClick={this.getPeliculas} style={{margin: "5px"}}> Show All </button>
            <button className="btn btn-primary" onClick={this.handleOpen} style={{margin: "5px"}}> Modal </button>
            <MovieList movies = {this.state.movies} handleOpen={this.handleOpen}/>

            <MovieDeleteModal 
                show = {this.state.show} 
                handleClose = {this.handleClose}
                deleteMovie = {this.deleteMovie}
                idMovie = {this.state.idMovie}
            />

          </div>

        );
    }

}

export default App;