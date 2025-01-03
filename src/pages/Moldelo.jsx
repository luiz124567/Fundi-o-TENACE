import gm from "../img/gm.webp";
import pçs from "../img/pçs.webp";
import Logo from "../img/Logo.webp";
import "../pages/Modelo.css";
function Modelo(props) {
  return (
    <div>
      <div className="T-BORDE">
        <img src={Logo} />
      </div>
      <header>{props.PODRUTO}</header>
      <img src={pçs} />
      <p className="T-MODELO">MODELO</p>
      <div>
        <img src={gm} />
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
export default Modelo;
