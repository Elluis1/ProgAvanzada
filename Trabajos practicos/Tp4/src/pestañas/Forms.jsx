import { useState } from "react";
import { Proyecto } from "./Proyecto";

export const Forms = ({proyecto, setProyecto}) => {
    const [nombre, setNombre] = useState("")
    const [tipo, setTipo] = useState("")
    const [persona, setPersona] = useState("")
    const [storyPoints, setStoryPoints] = useState("")
    const [prioridad, setPrioridad] = useState("")
    const [fecha, setFecha] = useState(Date)
    const [resumen, setResumen] = useState("")

    const [error,setError] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault()

 // Validar que los campos estén llenos
 if ([nombre, tipo, persona, storyPoints, prioridad, fecha, resumen].some(field => field === "")) {
    console.log('Hay al menos un campo vacío');
    setError(true);
    return;
}
setError(false);

        const Proyecto = {
        id: Date.now(),
        nombre,
        tipo,
        persona,
        storyPoints,
        prioridad,
        fecha,
        resumen
        }

        setProyecto([
            ...proyecto,
            Proyecto
        ])
        setNombre('')
        setTipo('')
        setPersona('')
        setStoryPoints('')
        setPrioridad('')
        setFecha(Date)
        setResumen('')
    }
    // Función para eliminar un proyecto
    const eliminarProyecto = (id) => {
        const proyectosActualizados = proyecto.filter(proj => proj.id !== id);
        setProyecto(proyectosActualizados);
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input value={nombre} placeholder="Nombre del proyecto" onChange={(e) => {setNombre(e.target.value)}}></input>
                <input value={tipo} placeholder="Tipo" onChange={(e) => {setTipo(e.target.value)}}></input>
                <input value={persona} placeholder="Nombre de la persona asignada" onChange={(e) => {setPersona(e.target.value)}}></input>
                <input value={storyPoints} placeholder="Story points" onChange={(e) => {setStoryPoints(e.target.value)}}></input>
                <input value={prioridad} placeholder="Prioridad" onChange={(e) => {setPrioridad(e.target.value)}}></input>
                <input type="date" onChange={(e) => {setFecha(e.target.value)}}></input>
                <input value={resumen} placeholder="Resumen" onChange={(e) => {setResumen(e.target.value)}}></input>
                <button type="submit">Subir</button>
            </form>
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
        <h2 className="font-black text-3xl text-center">Listado de Proyectos</h2>
        <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} 
        <span className="text-indigo-600 font-bold">proyectos</span> aquí
        </p>

        {proyecto.map(proyecto => (
            <div>
            <Proyecto
                key={proyecto.id}
                proyecto={proyecto}
            />
            <button onClick={() => eliminarProyecto(proyecto.id)}>Eliminar</button>
            </div>
        ))}
        </div>
    </div>
    )
}