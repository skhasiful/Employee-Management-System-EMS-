import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-4xl font-bold'>Hello<br/>Hasiful 👋</h1>
        <button className='bg-red-500 px-5 py-2 text-white font-semibold rounded-full'>Log Out</button>
    </div>
  )
}

export default Header