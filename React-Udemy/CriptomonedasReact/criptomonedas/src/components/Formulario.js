import React, { useEffect, useState } from "react";
import useMoneda from "../hooks/useMoneda";
import useCriptomonedas from "../hooks/useCriptomonedas";
import Error from "./Error";
import styled from "@emotion/styled";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  //State del listado de criptomonedas
  // Inicia como un arreglo vacio porque este estado guardara la respuesta de la api
  // y la respuesta es un arreglo de objetos
  const [listadoCripto, guardarCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  // Usamos el hook creado. SelectMonedas es un componente.
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  // Se utiliza useCriptomonedas
  const [criptomoneda, SelectCripto] = useCriptomonedas(
    "Elige tu Criptomoneda",
    "",
    listadoCripto
  );
  // Ejecutar consulta a la api
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      // Axios simplifica mucho el codigo
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };
    consultarApi();
  }, []);
  // Cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    // Validar si ambos campos estan llenos
    // El valor de lo que selecciona el usuario estara en los estados moneda y criptomoneda
    if (moneda.trim() === "" || criptomoneda.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Pasar los datos al componente principal para despues pasarlo a otro componente
    guardarMoneda(moneda);
    // No confundir con el propio guardarCriptomonedas que esta en mayuscula
    guardarCriptomoneda(criptomoneda);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Hay un error" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
