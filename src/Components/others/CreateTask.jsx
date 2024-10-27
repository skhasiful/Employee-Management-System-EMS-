import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form className='flex w-full px-8 py-5 mt-8 flex-wrap bg-slate-50 items-start justify-between'>
                <div className='w-1/2'>

                    <div>
                        <h3 className='mb-1'>Task Title</h3>
                        <input className='w-[50%]  border-2 border-green-400 rounded-full outline-none px-2 py-1' type="text" placeholder='Make ui design'/>
                    </div>
                    <div className='mt-3'>
                        <h3 className='mb-1'>Date</h3>
                        <input className='border-2 w-[50%] border-green-400 rounded-full outline-none px-2 py-1' type="date" /></div>

                    <div className='mt-3'>
                        <h3 className='mb-1'>Asign to</h3>
                        <input className='border-2 w-[50%] border-green-400 rounded-full outline-none px-2 py-1' type="text" placeholder='Employee Name' />
                    </div>
                    <div className='mt-3'>
                        <h3 className='mb-1'>Asign to</h3>
                        <input className='border-2 w-[50%] border-green-400 rounded-full outline-none px-2 py-1' type="text" placeholder='Employee Name' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col pr-12'>
                    <h3 className='mb-1'>Description</h3>
                    <textarea className='border-2 border-green-400 rounded-xl outline-none px-2 py-1'rows='8' column="12" name="" id=""></textarea>
                    <button className='bg-green-400 mt-10 rounded-full px-5 py-2 w-[40%] ml-56'>Create Task</button>
                </div>
                
               
            </form>
        </div>
  )
}

export default CreateTask