import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarMain from './Components/NavbarMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NavbarMain/> */}
    <App />
  </StrictMode>,
)
