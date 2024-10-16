export const Proyecto = ({proyecto}) => {
    const {nombre, tipo, persona, storyPoints, prioridad, fecha, resumen} = proyecto

    return (
        <div key={nombre} className="mx-5 my-10 bg-white shadow-md px-5 py-10 rouded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span key={nombre} className="font-normal normal-case">{nombre}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Tipo: {''}
            <span key={tipo} className="font-normal normal-case">{tipo}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Persona: {''}
            <span key={persona} className="font-normal normal-case">{persona}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
            <span key={storyPoints} className="font-normal normal-case">{storyPoints}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
            <span key={prioridad} className="font-normal normal-case">{prioridad}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
            <span key={fecha} className="font-normal normal-case">{fecha}</span>
        </p>
    
        <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
            <span key={resumen} className="font-normal normal-case">{resumen}</span>
        </p>
    
        </div>
    )
}