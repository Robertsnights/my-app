import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cuerpo1 from './cabecera.jsx'

createRoot(document.getElementById('Cabecera')).render(
  <StrictMode>
    <Cuerpo1 />
  </StrictMode>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

