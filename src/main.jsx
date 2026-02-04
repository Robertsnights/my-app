import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Cue1} from './App.jsx'
import Cabe from './cabecera.jsx'

createRoot(document.getElementById('Cabecera')).render(
  <StrictMode>
    <Cabe />
  </StrictMode>
)

createRoot(document.getElementById('Cuerpo1')).render(
  <StrictMode>
    <Cue1 />
  </StrictMode>,
)

