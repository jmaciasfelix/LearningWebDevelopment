import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear state de citas
  const [cita, actualizarCita] = useState(
    // En este caso es un objeto
    {
      mascota: "",
      propetario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    }
  );
  // Vamos a crear un segundo state, es comun en react hacer esto para no mezclar datos que no estan relacionados
  const [error, actualizarError] = useState(false);

  // Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    // Para saber en que campo estamos escribiendo e.target.name . Donde e es el evento de onChange
    // Con e.target.value obtenemos lo que el usuario lleva escrito en los inputs, onChange
    actualizarCita({
      // Importante poner esto para no perder la referencia de los valores actuales
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores de cita. Object destructuring
  // Ponemos value = mascota .. en todos los input para poder despues resetear
  const { mascota, propetario, fecha, hora, sintomas } = cita;

  // Funcion cuando usuario presiona en envíar cita/formulario
  const submitCita = (e) => {
    // Muy usado para que no nos recarge la pagina y nos cambie la URL.
    // por defecto cuando un boton de tipo submit es presionado se envia una peticion GET
    e.preventDefault();
    // primero siempre hay que validar antes de enviar algo que vayamos a insertar en la bbdd
    if (
      mascota.trim() === "" ||
      propetario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      // se actualiza el estado Error de nuestro componente
      actualizarError(true);
      // Siempre que haya un error ponemos return para que no se continue ejecutando nuestro codigo
      return;
    }
    // Si pasamos la validacion eliminamos el mensaje de error si existe
    actualizarError(false);
    // Asignamos un id, cuando se muestran registros repetidos es necesario en REACT un key
    // En un proyecto con una base de datos el ID lo asignara la base de datos
    cita.id = uuidv4();
    // Crear la cita y colocarla en el state principal
    crearCita(cita);
    // Reinciar el form
    actualizarCita({
      mascota: "",
      propetario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {/* No podemos poner un if tiene que ser un ternario */}
      {
        error ? (
          <p className="alerta-error">Todos los campos son obligatorios</p>
        ) : null
        // Con null no imprime nada
      }
      <form onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          // Skeleton para que tome todo el espacio disponible
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="propetario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={actualizarState}
          value={propetario}
        />
        <label>Fecha</label>
        <input
          // Importante para que salga un calendario
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          // Importante para que salga hora
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

// Forma para documentar y revisar nuestros componentes
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
