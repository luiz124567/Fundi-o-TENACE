import "../pages/ACABAMENTO.css";
import ROSCAGM from "../img/ROSCAGM.svg";
function ACABAMENTO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <p id="p">INSPEÇÃO NECESSÁRIA:VISUAL E GABARITAGEM DA ROSCA.</p>
      <img className="pçs" src={ROSCAGM} />
    </div>
  );
}
export default ACABAMENTO;