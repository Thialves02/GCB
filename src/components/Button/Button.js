import React from 'react'
import './Button.css'

export default function Button({title}) {
    return (
        <div className='container-button'>
            <button>{title}</button>
        </div>
    )
}
