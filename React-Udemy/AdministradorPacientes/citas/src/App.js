import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Citas en Local storage. LS solo almacena sting
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state cambia. Con [] me aseguro que se ejecuta solo una vez
  // siempre es un arrow function. Se ejecuta cuando el componente esta listo y cuando hay cambios en el componente
  // Con [citas] el useEffect se ejecuta cada vez que algo pasa con las citas, cada vez que cambie. DEPENDENCIA
  useEffect(() => {
    // Asi no nos da warning.
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    // Ponemos la cita que nos la da nuestro hijo en nuestro arreglo de citas
    guardarCitas([...citas, cita]);
  };

  // Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    // De esta forma nos devuelve todos menos el que es igual
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.length ? (
              <h2>Administra tus citas</h2>
            ) : (
              <h2>No hay citas</h2>
            )}
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
