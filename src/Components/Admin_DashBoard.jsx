import React from 'react'
import Header from './others/Header'
import CreateTask from './others/CreateTask'
import Alltask from './others/Alltask'
import { motion } from 'framer-motion'

const Admin_DashBoard = () => {
  
  return (
    <div className='p-5 '>
        <Header/>
        <CreateTask/>
        <Alltask/>
    </div>
  )
}

export default Admin_DashBoard