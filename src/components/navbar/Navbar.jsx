import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';

function Navbar({user}) {
  return (
    <div className = 'navbar'>
        <span className='logo'>
            <Link className = 'navbarLink' to = '/'>Blog App</Link>
        </span>
        {
            user ? (
                <ul className="list">
                  <li className="listItem">
                    <img src = 'img/pic.jpg' alt ="1"className="avatar"/>
                  </li>
                  <li className="listItem">Ainash</li>
                  <li className="listItem">Logout</li>
                </ul>
              ) : (
                <Link className="link" to="login">Login</Link>
            )
        }
    </div>
  )
}

export default Navbar