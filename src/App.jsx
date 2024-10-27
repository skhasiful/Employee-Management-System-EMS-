import React from 'react'
import NavbarMain from './Components/NavbarMain'
import Admin_DashBoard from './Components/Admin_DashBoard'
import Employees_DashBoard from './Components/Employees_DashBoard'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'




const App = () => {
  const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<><NavbarMain/><Home/><Admin_DashBoard/><About/>  </>

    },
    {
      path:"/About",
      element:<><NavbarMain/><About/>  </>

    },

    {
      path:"/Admin_DashBoard",
      element:<><NavbarMain/> <Admin_DashBoard/> </>
    },
    {
      path:"/Employees_DashBoard",
      element:<><NavbarMain/> <Employees_DashBoard/></>
    },
    {
      path:"/Login",
      element:<><Login/></>
    }
  ])
  return (
    <>
    <div className='font-serif'>
      {/* <NavbarMain/> */}
      {/* <Admin_DashBoard/> */}
      {/* <Employees_DashBoard/> */}
      <RouterProvider router={router}/>
      
      
    </div>
    </>
  )
}

export default App