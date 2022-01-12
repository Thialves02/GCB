import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const[click,setClick] = useState(true);

    const menu = () => {
        setClick(!click)
    }

    return (
        <div className={click ? 'navbar-container' : 'navbar-container-open'}>
            <h1>Healthy Food</h1>
            <ul >
                <li>HEALTHY RECIPES</li>
                <li>BLOG</li>
                <li>JOIN</li>
                <li>REGISTER</li>
            </ul>
            <div className='navbar-icon'>
                <FontAwesomeIcon icon={click ? faBars : faTimes} onClick={menu}/>
            </div>
        </div>
    )
}
