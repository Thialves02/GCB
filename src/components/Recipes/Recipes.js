import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import './Recipes.css'
import img1 from '../../assets/images/comida_1.svg'
import img2 from '../../assets/images/comida_2.svg'
import img3 from '../../assets/images/comida_3.svg'
import img4 from '../../assets/images/comida_4.svg'

export default function Recipes() {
    return (
        <div className="container-recipes">
            <div className='title-subtitle'>
                <h1>Our Best Recipes</h1>
                <p>Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts</p>
            </div>
            <div className='recipes-cards'>
                <RecipeCard
                title='Broccoli Salad with Bacon'
                image={img1}
                />
                <RecipeCard
                title='Classic Beef Burgers'
                image={img2}
                />
                <RecipeCard
                title='Classic Potato Salad'
                image={img3}
                />
                <RecipeCard
                title='Cherry Cobbler on the Grill'
                image={img4}
                />
            </div>
        </div>
    )
}
