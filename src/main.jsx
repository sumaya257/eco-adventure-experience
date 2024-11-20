import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './assets/provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
