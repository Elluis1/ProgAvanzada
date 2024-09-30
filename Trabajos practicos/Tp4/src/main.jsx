import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Forms} from './pestañas/Forms.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms/>
  </StrictMode>,
)
