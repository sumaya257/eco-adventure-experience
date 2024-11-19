import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
