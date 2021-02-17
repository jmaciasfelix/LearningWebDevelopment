import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

// Crear el Context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    // State del provider
    const [idReceta, guardarIdReceta] = useState(null);
    const [informacion, guardarReceta] = useState({});

    // Una vez que tenemos una receta llamar a la api
    useEffect(() => {
        const obtenerReceta = async () => {
            const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const respuesta = await axios.get(URL);

            guardarReceta(respuesta.data.drinks[0]);
        }
        if (idReceta != null) {
            obtenerReceta();
        }
    }, [idReceta])

    return (
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;
