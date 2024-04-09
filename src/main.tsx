import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cities from './Components/Cities';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Cities></Cities> ,
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
