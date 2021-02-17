import React, { useState } from 'react';

const Fomrulario = ({ guardarBusquedaLetra }) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: "",
        cancion: ""
    });

    const [error, guadarError] = useState(false);

    // Extraer object destructuring y colocarlo como values de los inputs
    const { artista, cancion } = busqueda;

    // Funcion a cada input para leer contenido
    const actualizarState = e => {
        guardarBusqueda(
            {
                ...busqueda,
                [e.target.name]: e.target.value
            }
        );
    }

    // Consultar las api, submit
    const buscarInformacion = e => {
        e.preventDefault();

        if (artista.trim() === "" || cancion.trim() === "") {
            guadarError(true);
            return;
        }
        guadarError(false);
        // Todo bien pasamos al componente princiapl. En el componente princial se hace la consulta a la api
        guardarBusquedaLetra(busqueda);
    }

    return (
        <div className="bg-info">
            {error ? (<p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>) : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista" //Mismo nombre que el atributo del objeto estado busqueda
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion" //Mismo nombre que el atributo del objeto estado busqueda
                                            placeholder="Nombre Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Fomrulario;