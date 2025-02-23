import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Log_sign from './components/Login_signin.jsx';
import Dashboard from './components/Dashboard.jsx'; 


const router = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/loginsignin',
  element: <Log_sign />
},{
  path: '/dashboard',
  element: <Dashboard />
}

]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
