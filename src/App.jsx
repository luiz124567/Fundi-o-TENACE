import Modelo from "./pages/Moldelo";
import Macharia from "./pages/Macharia";
import Moldação from "./pages/Moldação";
import { useState } from "react";
import Fusão from "./pages/Fusão";
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
      <Moldação PODRUTO="MOLDAÇÃO" descrição01="PROD./ HORA: 49." descrição02="PROD. DIÁRIA: 441." descrição03="PESO DO MOLDE: 19,0KG."/>
      <Macharia PODRUTO="Macharia" />
      <Fusão
        PODRUTO="FUSÃO"
        descrição06="QTD DE MOLDES POR MONTE: 4."
        descrição07="FILTRO: NÃO USA"
        descrição08="MATERIAL ULTILIZADO:GGG40"
        descrição01="PESO DE LASTRO: 4 UNIDADE."
        descrição02="TEMPERATURA DE VAZAMENTO : 1340 a 1420."
        descrição03="APÓS O ENCHIMENTO DOS MOLDES SÓ RETIRAR O PESO DE LASTRO APÓS O ENCHIMENTO DE OUTRAS 3 ÁRVORES."
      />
    </>
  );
}

export default App;
