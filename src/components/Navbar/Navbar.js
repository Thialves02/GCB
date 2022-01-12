import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const[click,setClick] = useState(true);

    const menu = () => {
        setClick(!click)
    }

    return (
        <div className={click ? 'navbar-container' : 'navbar-container-open'}>
            <Link to='/'><h1>Healthy Food</h1></Link>
            <ul >
                <li>HEALTHY RECIPES</li>
                <li>BLOG</li>
                <li>JOIN</li>
                <Link to='/register'><li>REGISTER</li></Link>
            </ul>
            <div className='navbar-icon'>
                <FontAwesomeIcon icon={click ? faBars : faTimes} onClick={menu}/>
            </div>
        </div>
    )
}
