import React, { Fragment, useState, useEffect } from 'react';
import Formulario from "./componentes/Formulario";
import Cancion from "./componentes/Cancion";
import Info from "./componentes/Info";
import axios from "axios";

function App() {
  // Definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    // Comprobar si un objeto esta vacio
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const url_letra = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
      const url_info = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`;
      // Async-await paralela para que se ejecuten simultaneamente. Esto es un promise
      const [letra, info] = await Promise.all([
        axios.get(url_letra), axios.get(url_info)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(info.data.artists[0]);
      // De esta forma no se ejecuta de forma recursiva
      guardarBusquedaLetra({});
    }

    consultarApiLetra();

  }, [busquedaLetra, info])

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
