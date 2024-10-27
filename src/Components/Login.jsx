
import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submithandaler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // alert("Submitted !!!")
        console.log("Email: "+email)
        console.log("Password: "+password)
        setemail("")
        setpassword("")

    }
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
        <div  className="border-2 border-green-500  rounded-xl w-96 h-5/6 flex justify-center   ">
            <form onSubmit={(e)=>{submithandaler(e)} }className='flex flex-col items-center  font-serif ' >
                <h1 className='text-2xl font-bold mt-4'>Login</h1>
                
                <h2 className='mr-40 mt-28'>Email or Username</h2>
                <input value={email} onChange={(e)=>{setemail(e.target.value)}} required className='h-11  w-80 mb-2 border-2 outline-none rounded-full border-green-400 px-4 py-4'type="text"  placeholder='Enter Your Email'/>
                <h2 className='mr-56 mt-3'>Password</h2>
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  required className='h-11 w-80 mb-2 border-2 outline-none rounded-full border-green-400 px-4 py-4' type="text" placeholder='Enter Your Password'/>
                <button className='w-20 bg-green-500 px-2 py-2 rounded-full border-none mt-10 '>Log In</button>
                
            </form>

        </div>
    </div>
  )
}

export default Login