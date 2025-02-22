import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Log_sign from './components/Login_signin.jsx';
import User_dashboard from './components/User_dashboard.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/loginsignin',
  element: <Log_sign />
},{
  path: '/dashboard',
  element: <User_dashboard />
}

]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
