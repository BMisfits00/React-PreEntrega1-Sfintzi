export default function BotonComponente({nombre}){

    const handleClick = () => {
        console.log(`Estas en la seccion de ${nombre}`)
    }

    return <button onClick={handleClick}>{nombre}</button>
}