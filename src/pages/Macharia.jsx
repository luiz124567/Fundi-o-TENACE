import MOLDE from "../img/MOLDE.webp";
import MACHOGM from "../img/MACHOGM.webp";
import "../pages/Macharia.css";
function Macharia(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img className="pçs" src={MACHOGM} />
      <p className="T-SETOR01">MOLDE DA ANCORAGEM 5/8 GM 16 FIGURAS</p>
      <div>
        <img src={MOLDE} />
      </div>
      <div>
        <p>{props.descrição01}</p>
        <p>{props.descrição02}</p>
        <p>{props.descrição03}</p>
        <p>{props.descrição04}</p>
        <p>{props.descrição05}</p>
      </div>
    </div>
  );
}
export default Macharia;
