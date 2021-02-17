// Los datos van a fluir desde este context
import React, { createContext, useState, useEffect } from 'react';
import Axios from "axios";

// Crear el context
export const CategoriasContext = createContext();

// Provider donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    // Crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    // Ejecutar el llamado a la api
    useEffect(
        () => {
            const obtenerCategorias = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

                const categorias = await Axios.get(url);

                guardarCategorias(categorias.data.drinks);
            }

            obtenerCategorias();
        }, [guardarCategorias]
    );

    return (
        <CategoriasContext.Provider
            // Todo lo que coloque estara disponible en todos los componentes
            value={{
                // Para hacer disponibles las categorias en los demas componentes
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;