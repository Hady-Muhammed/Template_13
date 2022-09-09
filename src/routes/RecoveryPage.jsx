import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Recovery from '../components/Recovery'

const RecoveryPage = () => {
  return (
    <>
        <Navbar/>
        <Recovery num={2}/>
        <Footer/>
    </>
  )
}

export default RecoveryPage