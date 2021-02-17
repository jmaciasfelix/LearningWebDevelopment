import React, { useState } from "react";

// Hooks usado para seleccionar una categoria

const useSelect = (stateInicial, opciones) => {
  // State del custom hook
  const [state, actualizarState] = useState(stateInicial);
  // Stateinicial -> cuando el usuario entra por primera vez en la web se mostrara unas noticias. Podemos elegir la categoria

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => actualizarState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
  // state es lo que el usuario seleccione
  return [state, SelectNoticias];
};

export default useSelect;
