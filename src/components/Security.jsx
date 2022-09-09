import React from 'react'

const Security = () => {
  return (
    <div className='security h-[80vh] relative before:absolute before:w-full before:h-full before:bg-black/40 flex items-center bg-top'>
        <div className='text-white relative z-[1] w-1/3 ml-[5em]'>
        <h1 className='text-4xl font-bold'><span className='text-primary'>Cloud</span> Security</h1>
            <p className='my-3 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quo porro non quis possimus tenetur distinctio cumque quisquam adipisci, cum eveniet delectus culpa quibusdam. Dolore excepturi iste delectus fugit repellendus.</p>
            <button className='bg-primary text-white w-fit rounded-md py-5 px-10 text-2xl duration-300 hover:bg-dark'>Sign Up</button>
        </div>
    </div>
  )
}

export default Security