import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx';
import Cart from './components/Cart.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetails from './components/ProductDetails.jsx';


const appRoute = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,

      children:[
        {
          path:"/",
          element:<ProductList/>

        },

        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/search",
          element:<App/>

        },
        {
          path:"/product/:id",
          element:<ProductDetails/>
        }

      ],
      errorElement:<NotFound/>
    }
    
  ],
  
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute}/>
    {/* <App /> */}
  </StrictMode>,
)