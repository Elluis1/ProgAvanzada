import { Forms } from './pestañas/Forms.jsx'
import { ListadoProyectos } from './pestañas/ListadoProyectos.jsx'
import './index.css'
import { useState } from 'react'

export const App = () => {
    const [proyecto, setProyecto] = useState([])
    return(
        <div className="container mx-auto mt-20">
          <div className='mt-12 flex'>
          <Forms
          proyecto={proyecto}
          setProyecto={setProyecto}
           />
          <ListadoProyectos
            proyecto={proyecto}
           />
          </div>
        </div>
    )

}