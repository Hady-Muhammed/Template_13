import React from 'react'

const Form = () => {
  return (
    <form className='h-[95vh] grid place-items-center'>
        <div className='flex flex-col space-y-10 w-[60%] mt-10'>
          <h1 className='text-white text-6xl font-bold'><span className='text-primary'>Contact</span> Us</h1>
          <input className='border-2 border-black rounded-lg p-2 outline-none text-white bg-slate-600/70' type="text" placeholder='Your name'/>
          <input className='border-2 border-black rounded-lg p-2 outline-none text-white bg-slate-600/70' type="email" name="" id="" placeholder='Your email' />
          <textarea className='resize-none border-2 border-black rounded-lg outline-none text-white bg-slate-600/70 p-2' name="" id="" cols="30" rows="10" placeholder='Message us'></textarea>
          <button className='bg-primary text-white w-fit rounded-md py-5 px-10 text-2xl duration-300 hover:bg-dark'>Submit</button>
        </div>
    </form>
  )
}

export default Form