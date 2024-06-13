export default function BotonComponente({nombre, color}){
    const misEstilos ={
        backgroundColor : color
    }

    const handleClick = () => {
        console.log(`Estas en la seccion de ${nombre}`)
    }

    return <button onClick={handleClick} style={misEstilos}>{nombre}</button>
}