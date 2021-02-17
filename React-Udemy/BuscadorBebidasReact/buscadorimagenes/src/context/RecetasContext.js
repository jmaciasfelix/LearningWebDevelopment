import React, { useState, createContext, useEffect } from 'react';
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: "",
        categoria: ""
    });
    const [consultar, guardarConsultar] = useState(false);

    useEffect(
        () => {
            if (consultar) {
                const obtenerRecetas = async () => {
                    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;

                    const resultado = await axios.get(URL);
                    // console.log(resultado.data.drinks);
                    guardarRecetas(resultado.data.drinks);
                }
                guardarConsultar(false);
                obtenerRecetas();
            }
        }, [busqueda, consultar]
    );

    return (
        <RecetasContext.Provider
            value={
                {
                    recetas,
                    buscarRecetas,
                    guardarConsultar
                }
            }
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;