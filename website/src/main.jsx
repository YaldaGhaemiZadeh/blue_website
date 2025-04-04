import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'; 
import Register from './components/NavigationBar/Register.jsx';
import Product1 from './components/Shop/Item001.jsx';


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
  path: '/item1',
  element: <Product1 />
}

]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
)
