import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JobProvider from './context/JobProvider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <JobProvider>
 <App />
    </JobProvider>   
  </StrictMode>,
)
