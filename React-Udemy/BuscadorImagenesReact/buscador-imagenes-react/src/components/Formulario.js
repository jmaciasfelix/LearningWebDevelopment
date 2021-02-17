import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ guardarBusqueda }) => {
  // State que guarda el termino buscado por el usuario
  const [termino, guardarTermino] = useState("");
  // Guarda el resultado de la validacion
  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();
    // Validar
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Enviar el termino de busqueda hacia el componente principal
    guardarBusqueda(termino);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: Fútbol o Café"
            onChange={(e) => guardarTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Formulario;