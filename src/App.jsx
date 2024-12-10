import Modelo from "./pages/Moldelo";
import Macharia from "./pages/Macharia";
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
      <Macharia PODRUTO="Macharia" />
      <Fusão
        PODRUTO="FUSÃO"
        descrição06="QTD DE MOLDES POR MONTE: 4."
        descrição07="FILTRO: NÃO USA"
        descrição08="MATERIAL ULTILIZADO:GGG40"
        descrição01="QTD DE PESO POR ÁRVORE: 4."
        descrição02="TEMPERATURA DE VAZAMENTO: 1340 á 1420. "
        descrição03="NÃO TROCAR O PESO ASSIM QUE O FUNDIDOR FUNDIR ESPERAR O FUNDIDOR FUNDIR MAIS DUAS ÁRVORE PRA TROCAR O PESO. (TEMPO DE SOLIDIFICAÇÃO)"
        
      />
    </>
  );
}

export default App;
