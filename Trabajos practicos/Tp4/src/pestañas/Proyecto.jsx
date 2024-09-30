export const Proyecto = ({proyecto, setProyecto}) => {
    const {nombre, tipo, persona, storyPoints, prioridad, fecha, resumen} = proyecto

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rouded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Tipo: {''}
            <span className="font-normal normal-case">{tipo}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Persona: {''}
            <span className="font-normal normal-case">{persona}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
            <span className="font-normal normal-case">{storyPoints}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
            <span className="font-normal normal-case">{prioridad}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
            <span className="font-normal normal-case">{resumen}</span>
        </p>
    
        </div>
    )
}