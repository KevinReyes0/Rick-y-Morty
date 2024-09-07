import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RickYMortyApp } from './components/RickYMortyApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickYMortyApp/>
  </StrictMode>,
)
