import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './contexts/provider/ContextProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import { routesProvider } from './routes/provider/provider.routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routesProvider}/>
    </ContextProvider>
  </React.StrictMode>,
)
