import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar () {
  return (
    <div className='Main-Container'>
        <div>
            <Link to="/home" className='logo' >Kalvium❤️</Link>
        </div>
        <div className='Container-2'>

            <Link to="/Contact" className='link' >Contact</Link>
            <Link  to="/About" className='link' >About</Link>
        </div>
    </div>
    
  )
}