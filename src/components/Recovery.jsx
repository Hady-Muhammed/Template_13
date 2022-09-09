import React from 'react'

const Recovery = ({num}) => {
  return (
    <div className={`${num === 1? 'recovery1': 'recovery2'} h-[70vh] flex ${num === 1? 'justify-end' : 'justify-start'} ${num === 1? 'pl-0' : 'pl-10'} items-center bg-top`}>
        <div className='w-1/2'>
            <h1 className={`${num === 1? 'text-black': 'text-white'} text-4xl font-bold`}><span className='text-primary'>Data</span> Recovery</h1>
            <p className='my-3 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quo porro non quis possimus tenetur distinctio cumque quisquam adipisci, cum eveniet delectus culpa quibusdam. Dolore excepturi iste delectus fugit repellendus.</p>
            <button className='bg-primary text-white w-fit rounded-md py-5 px-10 text-2xl duration-300 hover:bg-dark'>Sign in</button>
        </div>
    </div>
  )
}

export default Recovery