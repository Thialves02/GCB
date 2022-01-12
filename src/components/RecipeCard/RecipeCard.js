import React from 'react'
import Button from '../Button/Button'
import './Recipe.css'

export default function RecipeCard({title,image}) {
    return (
        <div className='recipe-card-container'>
            <img src={image}/>
            <div className='recipe-card-infos'>
                <h1>{title}</h1>
                <Button
                title='See Recipe'
                />
            </div>
        </div>
    )
}
