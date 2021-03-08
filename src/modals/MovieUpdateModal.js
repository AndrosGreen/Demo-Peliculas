import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieUpdateModal = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Actualizar pelicula</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{props.id}</h5>
                    <h5>{props.nombre}</h5>
                    <h5>{props.rating}</h5>
                </Modal.Body>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancelar
                </Button>
                
                <Button variant="primary">
                    Actualizar
                </Button>
                
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MovieUpdateModal;