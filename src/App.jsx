import Modelo from "./pages/Moldelo";
import Macharia from "./pages/Macharia";
import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Modelo
        PODRUTO="ANCORAGEM 5/8 GM 16 FIGURAS"
        descrição01="QUANTIDADE DE FIGURA: 16."
        descrição02="CAMPANA: 68."
        descrição03="CLICHÊS: MÊS ANO."
      />
      <Macharia PODRUTO="Macharia"/>
    </>
  );
}

export default App;
