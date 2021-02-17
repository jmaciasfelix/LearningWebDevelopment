// Este componente muestra la letra de la cancion que estamos buscando
import React, { Fragment } from 'react';

const Cancion = ({ letra }) => {
    // Obligatorio el null
    if (letra.length === 0) return null;

    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    )
}

export default Cancion;