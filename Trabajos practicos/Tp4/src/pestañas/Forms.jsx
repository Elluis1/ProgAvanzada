import { useState } from "react";

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

            //validar que los campos esten llenos
    if([nombre, tipo, persona, storyPoints, prioridad, fecha,resumen].length < 1) {
        console.log('Hay al menos un campo vacio')
  
        setError(true)
        return
      }

      setError(false)

        const Proyecto = {
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
        setFecha('')
        setResumen('')
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input value={nombre} placeholder="Nombre del proyecto" onChange={(e) => {setNombre(e.target.value)}}></input>
                <input value={tipo} placeholder="Tipo" onChange={(e) => {setTipo(e.target.value)}}></input>
                <input value={persona} placeholder="Nombre de la persona asignada" onChange={(e) => {setPersona(e.target.value)}}></input>
                <input value={storyPoints} placeholder="Story points" onChange={(e) => {setStoryPoints(e.target.value)}}></input>
                <input value={prioridad} placeholder="Prioridad" onChange={(e) => {setPrioridad(e.target.value)}}></input>
                <input type="date" onSubmit={(e) => {setFecha(e.target.value)}}></input>
                <input value={resumen} placeholder="Resumen" onChange={(e) => {setResumen(e.target.value)}}></input>
                <button type="submit">Subir</button>
            </form>
        </div>
    )
}