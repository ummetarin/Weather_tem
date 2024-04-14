import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home';
import Cities from './Components/Cities/Cities';
import Weatherpage from './Components/WeatherPage/Weatherpage';
import Favouriteitems from './Components/Favoriteitems/Favouriteitems';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home> ,
    children:[
      {
        path:"/",
        element:<Cities></Cities>
      },{
        path:"/weather/:city",
        element:<Weatherpage></Weatherpage>
      },{
        path:"/fav",
        element:<Favouriteitems></Favouriteitems>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
