import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen flex items-center text-5xl'>
        <div className='xs:ml-[5%] md:ml-[15%]'>
        <h1 className='text-white font-semibold leading-[1.3em] mb-5'>Data <br /> <span className='text-primary'>Secured</span> <br /> Protection</h1>
        <button className='bg-primary text-white w-fit rounded-md py-5 px-10 text-2xl duration-300 hover:bg-dark'>Learn More</button>
        </div>
    </section>
    )
}

export default Hero