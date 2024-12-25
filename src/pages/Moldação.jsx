import MOLDE02 from "../img/MOLDE02.webp";
import "../pages/Moldação.css";
function Moldação(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img className="molde" src={MOLDE02} />
      <div>
        <p className="P" >{props.descrição01}</p>
        <p className="P">{props.descrição02}</p>
        <p className="P">{props.descrição03}</p>
        <p className="P">{props.descrição04}</p>
        <p className="P">{props.descrição05}</p>
      </div>
    </div>
  );
}
export default Moldação;