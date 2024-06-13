import './NavComponente.css'
import BotonComponente from "./BotonComponente";
import CartWidget from './CartWidget';

export default function NavComponente(){
    return(<>
    <div className='barra'>
        
        <div className="grid-boton">
        <BotonComponente nombre='About us'/>
        </div>
        
        <div className="grid-boton">
        <BotonComponente nombre='Products'/>
        </div>
        
        <div className="grid-boton">
        <BotonComponente nombre='Contact'/>
        </div>
        
        <div className="grid-titulo">
            <h1 className='titulo'>Tecno World</h1>
        </div>

        <div className="grid-carrito">
            <CartWidget/>
        </div>

    </div>
    </>)
}