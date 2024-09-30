import { useState } from "react";

export const Forms = () => {
    const [proyecto, setProyecto] = useState("")
    const [tipo, setTipo] = useState("")
    const [persona, setPersona] = useState("")
    const [storyPoints, setStoryPoints] = useState("")
    const [prioridad, setPrioridad] = useState("")
    const [fecha, setFecha] = useState(Date)
    const [resumen, setResumen] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault

        const tasklist = [{
        proyecto,
        tipo,
        persona,
        storyPoints,
        prioridad,
        fecha,
        resumen
        }]

        setProyecto("")
        setTipo("")
        setPersona("")
        setStoryPoints("")
        setPrioridad("")
        setFecha("")
        setResumen("")
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input placeholder="Nombre del proyecto" onSubmit={(e) => {setProyecto(e.target.value)}}></input>
                <input placeholder="Tipo" onSubmit={(e) => {setTipo(e.target.value)}}></input>
                <input placeholder="Nombre de la persona asignada" onSubmit={(e) => {setPersona(e.target.value)}}></input>
                <input placeholder="Story points" onSubmit={(e) => {setStoryPoints(e.target.value)}}></input>
                <input placeholder="Prioridad" onSubmit={(e) => {setPrioridad(e.target.value)}}></input>
                <input type="date" onSubmit={(e) => {setFecha(e.target.value)}}></input>
                <input placeholder="Resumen" onSubmit={(e) => {setResumen(e.target.value)}}></input>
                <button type="submit">Subir</button>
            </form>
            <h1>
                <li>
                    {/* {! tasklist.length > 0 ? 
                    (tasklist.map(task => {
                            <li>
                                ${task.proyecto} - ${task.tipo} - ${task.persona} - ${task.storyPoints} - ${task.resumen} - ${task.fecha} - ${task.resumen} - 
                            </li>
                        })) : (
                            <header>No hay Tareas cargadas</header>
                        )
                    } */}
                </li>
            </h1>
        </div>
    )
}