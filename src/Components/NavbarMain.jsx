import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


const NavbarMain = () => {
 
    
  return (
    <>
    <div className='flex justify-between items-center p-10 pt-7 pb-7 text-2xl bg-sky-300  '>
        <h1 className='font-semibold'>EMS</h1>
        <div >
          <ul className='  flex gap-10'>
            <li className=' hover:text-emerald-700'><Link to="/">Home</Link></li>
            <li className=' hover:text-emerald-700'><Link to="/About">About</Link></li>
            <li className=' hover:text-emerald-700'><Link to="/Admin_DashBoard">Admin_DashBoard</Link></li>
            <li className=' hover:text-emerald-700'><Link to="/Employees_DashBoard">Employees_DashBoard</Link></li>
            
          </ul>
            

        </div>
        <div  className=' hover:text-emerald-700 border-2 text-xl rounded-full px-3 py-1'>
          <Link to="/Login">Log in</Link>
        
            {/* <button onClick={handle} className='  hover:text-emerald-700'>Log in</button> */}
        </div>

    </div>
    
    </>
  )
}

export default NavbarMain