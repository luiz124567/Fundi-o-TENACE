import Modelo from "./pages/Moldelo";
import Macharia from "./pages/Macharia";
import Moldação from "./pages/Moldação";
import Fusão from "./pages/Fusão";
import "./App.css";
import ESMERIL from "./pages/ESMERIL";
import ACABAMENTO from "./pages/ACAbAMENTO";
function App() {
  return (
    <>
      <Modelo
        PODRUTO="ANCORAGEM 5/8 GM 16 FIGURAS"
        descrição01="QUANTIDADE DE FIGURA: 16."
        descrição02="CAMPANA: 68."
        descrição03="CLICHÊS: MÊS ANO."
      />
      <Moldação
        PODRUTO="MOLDAÇÃO"
        descrição01="PROD./ HORA: 49."
        descrição02="PROD. DIÁRIA: 441."
        descrição03="PESO DO MOLDE: 19,0KG."
      />
      <Macharia PODRUTO="Macharia" />
      <Fusão
        PODRUTO="FUSÃO"
        descrição06="QTD DE MOLDES POR MONTE: 4."
        descrição07="FILTRO: NÃO USA"
        descrição08="MATERIAL ULTILIZADO:GGG40"
        descrição01="PESO DE LASTRO: 4 UNIDADES."
        descrição02="TEMPERATURA DE VAZAMENTO : 1360 a 1410."
        descrição03="APÓS O ENCHIMENTO DOS MOLDES SÓ RETIRAR O PESO DE LASTRO APÓS O ENCHIMENTO DE OUTRAS 3 ÁRVORES."
      />
      <ESMERIL
        PODRUTO="ESMERIL"
        descrição06="PONTO DE ESMERILAÇÃO 01: CANAL DE ALIMENTAÇÃO."
        descrição07="PONTO DE ESMERILAÇÃO 02:PARTE SUPERIOR DA  PEÇA."
        descrição01="PONTO DE ESMERILAÇÃO 03:PARTE INFERIOR DA  PEÇA."
      />
      <ACABAMENTO PODRUTO="ACABAMENTO"/>
      
    </>
  );
}

export default App;
