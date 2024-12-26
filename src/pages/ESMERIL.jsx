import ponto1 from "../img/ponto1.webp";
import ponto2 from "../img/ponto2.webp";
function ESMERIL(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img className="pçs" src={ponto1} />
      <p>{props.descrição06}</p>
      <p>{props.descrição07}</p>
      <p>{props.descrição08}</p>
      <p>{props.descrição09}</p>
      <div>
        <img src={ponto2} />
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
export default ESMERIL;