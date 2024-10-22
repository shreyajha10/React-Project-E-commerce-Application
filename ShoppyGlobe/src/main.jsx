import React, {lazy,Suspense} from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx';
// import Cart from './components/Cart.jsx';
// import ProductList from './components/ProductList.jsx';
// import ProductDetails from './components/ProductDetails.jsx';

const ProductList = lazy(() => import("./components/ProductList.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const ProductDetails = lazy (() => import("./components/ProductDetails.jsx"));



const appRoute = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,

      children:[
        {
          path:"/",
          element:( <Suspense fallback={<p>Loading Products...</p>}> <ProductList/></Suspense>)

        },

        {
          path:"/cart",
          element:(
          <Suspense fallback={<p>Loading Cart...</p>}><Cart/></Suspense>)
        },
        {
          path:"/search",
          element:<App/>

        },
        {
          path:"/product/:id",
          element:(<Suspense fallback={<p>Loading Product Details...</p>}><ProductDetails/></Suspense>)
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