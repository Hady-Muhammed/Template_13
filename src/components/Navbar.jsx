import { useState} from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FiMenu} from 'react-icons/fi'
import {FaTimes} from 'react-icons/fa'

import {Link} from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
    <nav className={`absolute z-[50] w-full bg-transparent duration-300 p-5 xs:px-10 sm:px-20 flex justify-between`}>
        <div className='flex items-center'>
            <SiDatabricks size={50} className='text-primary mr-3'/>
            <span className='text-5xl text-white'>Secured</span>
        </div>

        <button className='ml-10 xs:block lg:hidden' onClick={() => setNav(!nav)}>{nav ? <FaTimes size={40} className='text-white'/> : <FiMenu size={40} className='text-white'/> }</button>

        <ul className='items-center space-x-10 text-white text-xl xs:hidden lg:flex'>
            <li><Link to='/Template_13/'>Home</Link></li>
            <li><Link to='/Template_13/recovery'>Recovery</Link></li>
            <li><Link to='/Template_13/cloud'>Cloud</Link> </li>
            <li><Link to='/Template_13/contact'>Contact</Link></li>
            <button className='bg-primary text-white w-fit rounded-md py-5 px-10 text-2xl duration-300 hover:bg-dark'>Sign in</button>
        </ul>
    </nav>
        <ul className={`${nav ? 'top-0' : 'top-[-150%]'} duration-300 fixed w-full h-full flex items-center justify-center z-[10] flex-col space-y-10 text-white text-xl text-center bg-black/90 p-5`}>
            <li><Link to='/Template_13/'>Home</Link></li>
            <li><Link to='/Template_13/recovery'>Recovery</Link></li>
            <li><Link to='/Template_13/cloud'>Cloud</Link> </li>
            <li><Link to='/Template_13/contact'>Contact</Link></li>
            <button className='bg-primary text-white w-fit rounded-md py-5 px-10 text-2xl duration-300 hover:bg-dark'>Sign in</button>
        </ul>
    </>

  )
}

export default Navbar