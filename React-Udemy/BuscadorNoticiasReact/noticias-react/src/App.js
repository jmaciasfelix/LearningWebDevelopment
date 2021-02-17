import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  // Cuando se detecta un cambio en categorias significa que el usuario ha hecho submit
  // y se debe llamar a la api para cargar las noticias
  useEffect(() => {
    const consutlarApi = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=7cbc7b37d5614f67a9f7b1104fa5f5b7`;
      const respuesta = await fetch(URL);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consutlarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
