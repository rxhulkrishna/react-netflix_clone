import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <div className="left">
                <li className='logo'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo"/>
                </li>
                <div className='links'>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Series</a></li>
                    <li><a href="">Kids</a></li>
                </div>
            </div>
            <li className='avatar'>
                <span className="material-symbols-outlined">
                account_circle
                </span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar