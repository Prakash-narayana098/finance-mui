import { StrictMode } from 'react'
import Inspect from 'inspx';
import { createRoot } from 'react-dom/client'
import App from './project-2.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Inspect>
    <StrictMode>
      <App />
    </StrictMode>
  </Inspect>,
)
