import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='text-8xl flex justify-center items-center p-12 mt-5 bg-red-200'>About</h1>
    <div className='flex '>
        <div className=''>
            <img src="https://static.vecteezy.com/system/resources/previews/017/156/304/non_2x/man-sitting-and-working-at-laptop-manager-office-worker-illustration-isolated-on-white-background-vector.jpg" width="600px" alt="Err" />
        </div>
        <div className='w-[50vw] mt-32 ml-32'>
            <h2 className='text-3xl'>About Us</h2>
            <p className='mt-10 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laudantium provident. Corrupti delectus, beatae tenetur corporis aperiam, at sapiente incidunt voluptates numquam asperiores earum neque, eum pariatur assumenda dolor! Cumque dolorum assumenda, modi tempora quod quas enim dolores eum quasi nisi soluta quam placeat eveniet quidem sint ducimus distinctio numquam?
            </p>
        </div>
    </div>
    <h1 className='flex border-y-2 border-black justify-center items-center py-6 text-2xl'>Copyright &copy; 2024 search Engine</h1>
    
    </>
  )
}

export default About