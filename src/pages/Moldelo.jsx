import gm from "../img/gm.svg"
import pçs from "../img/pçs.svg"
import Logo from "../img/Logo.svg"
import '../pages/Modelo.css'
function Modelo(){
    return(
        <div>
            <div className="T-BORDE" >
            <img src={Logo}/>
            </div>
            <header>ANCORAGEM 5/8 GM 16 FIGURAS</header>
            <img className="pçs" src={pçs}/>
            <p className="T-SETOR">MODELO</p>
            <div>
                <img src={gm}/>
            </div>
            <div>
                <p>
                 QUANTIDADE DE FIGURA: 16
                </p>
                <p>
                 CAMPANA:68.
                </p>
                <p>
                 CLICHÊS: MÊS ANO.
                </p>
            </div>
        </div>
    )
}
export default Modelo