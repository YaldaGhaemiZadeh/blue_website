import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'; 
import Register from './components/NavigationBar/Registeration/Register.jsx';
import Product_temp from './components/Shop/ProductTemplate.jsx'
import Blog_template from "./components/Blog/BlogTemplate";
import Shop from './components/Shop/Shop.jsx';


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
},{
  path: '/blog',
  element: <Blog_template />
},{
  path: '/shop',
  element: <Shop />
}

]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
