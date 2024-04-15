import React from 'react'
import './Logo.css'
import stacklineLogo from '../images/stackline_logo.svg'

function Logo() {
  return (
    <div>
        <a href="/" className='logo d-flex align-items-center'>
            <img src={stacklineLogo} alt="Stackline Logo"/>
        </a>
    </div>
  )
}

export default Logo