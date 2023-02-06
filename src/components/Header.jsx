import { useEffect } from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ?
        <ControlPresupuesto
          gastos={gastos}
          presupuesto={presupuesto}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto} /> :
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto} />
      }
    </header>
  );
}

export default Header;