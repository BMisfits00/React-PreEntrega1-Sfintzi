import './NavComponente.css'
import BotonComponente from "./BotonComponente";

export default function NavComponente(){
    return(<>
    <div className='barra'>
        <div className="grid-titulo">
            <h1 className='titulo'>Tecno World</h1>
        </div>
        <div className="grid-boton">
        <BotonComponente nombre='About us' color='green'/>
        </div>
        <div className="grid-boton">
        <BotonComponente nombre='Products' color='red'/>
        </div>
        <div className="grid-boton">
        <BotonComponente nombre='Contact' color='blue'/>
        </div>

    </div>
    </>)
}