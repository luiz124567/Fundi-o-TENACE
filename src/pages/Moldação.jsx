import '../pages/titulo.css'
import gm from "../img/gm.svg"
function Macharia(){
    return(
        <>
            <header>MACHARIA</header>
            <section className="d-flex">
            <div>
                <img src={gm}/>
            </div>
            <div>
                <p>
                QTD MACHO POR <br/>MOLDE: 18 MACHOS
                </p>
            </div>
            </section>
        </>
    )
}
export default Macharia