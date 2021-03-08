import React from 'react';

const Movie = (props) => {
    return (
        <div className="card" style={{width: "30rem", margin: "5px"}}>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <h6 className="card-subtitle">{props.rating}</h6>
                <button className="btn btn-danger" onClick={ () => props.handleOpenDelete(props.id)} >Delete</button>
                <button className="btn btn-warning" onClick={ () => props.handleOpenUpdate(props.id) }>Update</button>
            </div>
        </div>
    );
};

export default Movie;