import React from 'react'
import './BlogCard.css'

export default function BlogCard({image,title,profile,name}) {
    return (
        <div className="blogCard-container">
            <img src={image}/>
            <h1>{title}</h1>
            <div className='blogCard-profile'>
                <img src={profile}/>
                <p>{name}</p>
            </div>
        </div>
    )
}
