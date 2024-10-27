import React from 'react'

const Home = () => {
  return (
    <>
    <div className='flex pl-5 h-[90vh] '>
        <div className='w-[50vw]'>
            <h1 className='text-5xl font-bold ml-10 mt-10'>Employee Management System</h1>
            <p className='text-2xl mt-14 ml-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, autem laborum. Vero ipsa rem, eligendi blanditiis nihil explicabo delectus dolores ut numquam iste quidem sapiente praesentium quo magnam mollitia temporibus ab nulla cumque, impedit animi beatae atque quasi qui. Officia optio expedita eveniet nam error, alias exercitationem reprehenderit animi? Corrupti!</p>
            <button className='mt-24 ml-40 border-2 bg-blue-500 text-2xl rounded-full font-semibold px-3 py-2'>LEARN MORE</button>

        </div>
        <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/865/108/original/animated-developer-flat-character-full-body-person-4k-footage-with-alpha-channel-online-course-remote-programming-job-color-cartoon-style-illustration-for-motion-graphic-design-and-animation-video.jpg" alt="" width="900px"/>
        </div>
    </div>
    </>
    
  )
}

export default Home