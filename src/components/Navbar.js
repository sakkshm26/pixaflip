import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <img src='https://hackncs.com/img/ncs-logo.svg' />
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Team</li>
                    <li>Alumni</li>
                    <li><button>Get in Touch</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
