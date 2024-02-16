import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import './config/sass/_general.style.scss'
import { ContextProvider } from './contexts/provider/ContextProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import { routesProvider } from './routes/provider/provider.routes.tsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routesProvider}/>
      <ToastContainer/>
    </ContextProvider>
  </React.StrictMode>,
)
