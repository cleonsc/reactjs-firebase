import React, { Fragment } from "react";

function Hola() {
  let saludo = "Hola que tal";
  return (
    <Fragment>
      <h2>Hola desde componente: {1 + 1}</h2>
      <p>{saludo}</p>
    </Fragment>
  );
}

export default Hola;
