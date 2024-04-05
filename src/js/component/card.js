import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
    console.log(props);
    return (
        <div className={`${props.indice==0 ? "ps-0":""} ${props.indice==3 ? "pe-0":""} col-lg-3 col-md-4`}>
            <div className="card">
                <img src={props.ruta} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">
                        <a href="#" className="btn btn-primary">Find Our More!</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

Card.propTypes = {
    nombre: PropTypes.string,
    descripcion: PropTypes.string
}

export default Card;