import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'; 
import Register from './components/NavigationBar/Register.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/register',
  element: <Register />
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
