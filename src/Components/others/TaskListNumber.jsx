import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between screen gap-5 '>
       
        <div className='rounded-xl w-[45%] p-10 bg-red-400'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] p-10 bg-green-400'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium '>Completed</h3>
        </div>
        <div className='rounded-xl w-[45%] p-10 bg-blue-400'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium '>Accepted</h3>
        </div>
        <div className='rounded-xl w-[45%] p-10 bg-yellow-400'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl font-medium '>Failed</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumber