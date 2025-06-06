import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import home from './components/home/Home.jsx'
import about from './components/about/About.jsx'
import contact from './components/contact/Contact.jsx'
import login from './components/login/Login.jsx'
import layout from './layout.jsx'


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<layout />}>  
      <Route index element={<home />} />  
      <Route path="about" element={<about />} />
      <Route path="contact" element={<contact />} />
      <Route path="login" element={<login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
