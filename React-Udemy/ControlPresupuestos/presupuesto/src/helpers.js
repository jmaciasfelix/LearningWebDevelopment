export const revisarPresupuesto = (presupuesto, restante) => {
  let clase;
  const p_dg = presupuesto / 4;
  const p_wr = presupuesto / 2;

  if (p_dg > restante) {
    clase = "alert alert-danger";
  } else if (p_wr > restante) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }
  return clase;
};
