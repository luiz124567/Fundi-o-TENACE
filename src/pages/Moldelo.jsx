import gm from "../img/gm.svg"
import pçs from "../img/pçs.svg"
import '../pages/titulo.css'
function Modelo(){
    return(
        <div className="T-BORDE">
            <header>ANCORAGEM 5/8 GM 16 FIGURAS</header>
            <img className="pçs" src={pçs}/>
            <p className="T-SETOR">MODELO</p>
            <section >
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
            </section>
        </div>

    )
}
export default Modelo