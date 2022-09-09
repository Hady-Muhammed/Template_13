import React from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {SiDatabricks} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import List from './List'
const Footer = () => {

  return (
    <footer className='p-20 bg-right'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <SiDatabricks size={50} className='text-primary mr-3'/>
                <span className='text-5xl text-slate-600'>Secured</span>
            </div>
            <button className='bg-primary text-white p-2 rounded-full' onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}><AiOutlineArrowUp size={30}/></button>
        </div>
        <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
            <List head="NAVIGATION" items={['Home','Data','Cloud','Contact']}/>
            <List head="MY ACCOUNT" items={['Login','My Data','Cloud Security','Important','Specialist']}/>
            <List head="INFORMATION" items={['Membership','Data Protocols','Cloud Protocols','Security Roles']}/>
            <List head="LEGAL" items={['Policies','Terms & Conditions','Securities']}/>
            <div>
                <h3 className='font-bold text-xl text-slate-600'>JOIN OUR TEAM</h3>
                <input type="email" name="" id="" className='border-2 border-black/40 rounded-sm px-3 py-1 my-5' placeholder='Enter your email'/>
                <ul className='flex flex-row space-x-4'>
                    <li className='bg-dark text-white p-1'><FaInstagramSquare size={30}/></li>
                    <li className='bg-dark text-white p-1'><FaFacebookSquare size={30}/></li>
                    <li className='bg-dark text-white p-1'><FaTwitterSquare size={30}/></li>
                    <li className='bg-dark text-white p-1'><FaLinkedin size={30}/></li>
                </ul>
            </div>
        </div> 
    </footer>
  )
}

export default Footer