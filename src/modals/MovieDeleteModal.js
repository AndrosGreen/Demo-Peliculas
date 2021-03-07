import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDeleteModal = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Eliminar Pelicula</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estas seguro que quieres eleminar la pelicula?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => props.deleteMovie(props.idMovie)}>
                    Eliminar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MovieDeleteModal;