import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, year y tipo de seguro.</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup
        // TextoCotizacion es un span. Parrafo no porque un parrafo dentro de otro parrafo no es posible
        component="span"
        // Ver clases en index.css que hacen que se vea mejor la transicion
        className="resultado"
      >
        <CSSTransition
          // Mismo que el className de TransitionGroup
          classNames="resultado"
          // Valor unico
          key={cotizacion}
          // Tiempo de la animacion
          timeout={{ enter: 1000, exit: 1000 }}
        >
          <TextoCotizacion>
            El total es: $ <span>{cotizacion}</span>
          </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
