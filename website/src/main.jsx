import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'; 
import Register from './components/NavigationBar/Registeration/Register.jsx';
import Product_temp from './components/Shop/Product_template.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <App />
},{
  path: '/register',
  element: <Register />
},{
  path: '/dashboard',
  element: <Dashboard />
},{
  path: '/product',
  element: <Product_temp />
}

]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
