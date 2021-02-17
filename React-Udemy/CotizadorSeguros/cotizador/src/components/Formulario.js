import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
// Aplicamos destructuring para extraer la funcion a exportar ya que no es default
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  /* Le quita la apariencia natural de select y se le puede pasar mas propiedades, por ejemplo un border */
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  /* Sintaxis de SASS. Se usa el & para hacer refencia al mismo elemento */
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, guardarError] = useState(false);

  // Extraer los valores del state
  const { marca, year, plan } = datos;

  // Leer los datos del formulario y colocarlos en el state
  const obtenerInformacionFormulario = (e) => {
    guardarDatos({
      ...datos,
      // De esta forma solo se modifica el valor del atributo que se llame igual y se añade el nuevo valor
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario hace clic en submit
  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Obtener la diferencia de años. Cada año es mas barato
    const diferencia = obtenerDiferenciaYear(year);
    // Vamos a tener una base de 2000, de ahi incrementamos/decrementamos seguro
    let resultado = 2000;
    // Por cada año se resta el 3% del valor
    resultado -= (diferencia * 3 * resultado) / 100;

    // Cada marca tendra un incremento Americano 15%, asiatico 5% y europeo 30%
    resultado = resultado * calcularMarca(marca);
    // Planes basico aumenta 20% y completo 50%. toFixed para que solo nos quedemos
    // con dos cifras significativas
    resultado = parseFloat(resultado * obtenerPlan(plan)).toFixed(2);
    // Se hace visible el spinner
    guardarCargando(true);

    setTimeout(() => {
      // De etsa forma el spinner se muestra 3 segundos
      guardarCargando(false);
      // Pasamos el resultado final hacia el componente padre App. Objeto con un
      //  atributo y un objeto
      guardarResumen({
        cotizacion: Number(resultado),
        datos, // La variable datos es un objeto que contiene info de marca,year y plan. Es un estado
      });
    }, 3000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select
          name="marca"
          value={marca}
          onChange={obtenerInformacionFormulario}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange={obtenerInformacionFormulario}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacionFormulario}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacionFormulario}
        />
        Completo
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

Formulario.propTypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired,
};

export default Formulario;
