import { useEffect, useState } from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {

  return (
    <div className="listado-gastos contenedor">
      <h2>
        {gastos.length ? (filtro ? (gastosFiltrados.length ? 'Gastos Filtrados' : 'No hay gastos en esta categoria') : 'Gastos') : 'No hay gastos registrados aun'}
      </h2>
      {
        filtro ? (
          gastosFiltrados.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto} />
          )
          )
        ) : (
          gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto} />
          )
          )
        )
      }

    </div>
  );
}

export default ListadoGastos;