import { Proyecto } from "./Proyecto"

export const ListadoProyectos = ({ proyecto }) => {

  console.log(proyecto)

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Proyectos</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} 
      <span className="text-indigo-600 font-bold">proyectos</span> aquí
      </p>

      {proyecto.map(proyecto => (
        <Proyecto
          key={proyecto.nombre}
          proyecto={proyecto}
        />
      ))}
    </div>
  )
}