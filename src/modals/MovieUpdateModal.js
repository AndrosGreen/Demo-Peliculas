import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieUpdateModal extends React.Component {

    // hello

    constructor (props){
        super(props);
        this.state = { nombre: props.nombre, rating : props.rating}
    }

    componentDidUpdate(prevProps){
        if( this.props.nombre !== prevProps.nombre){
            this.setState({nombre: this.props.nombre, rating : this.props.rating});
        }
    }

    render(){
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Actualizar pelicula</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <div>
                            <form onSubmit={(event)=> event.preventDefault()}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input 
                                        className="form-control" 
                                        value = {this.state.nombre}
                                        onChange = { (e) => this.setState( { nombre : e.target.value} ) }
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Rating</label>
                                    <input 
                                        className="form-control" 
                                        value={this.state.rating}
                                        onChange = { (e) => this.setState( { rating : e.target.value} ) }
                                    />
                                </div>
                            </form>
                        </div>    

                    </Modal.Body>
                    
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cancelar
                    </Button>
                    
                    <Button variant="primary" onClick={() => this.props.update(17,this.state.nombre,10)}>
                        Actualizar
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default MovieUpdateModal;