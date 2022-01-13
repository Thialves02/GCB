import React, { useState } from 'react'
import BlogCard from '../BlogCard/BlogCard'
import './Blog.css'
import img1 from '../../assets/images/blog_image_1.svg'
import img2 from '../../assets/images/bloco_image_2.svg'
import img3 from '../../assets/images/bloco_image_3.svg'
import img4 from '../../assets/images/bloco_image_4.svg'
import profile1 from '../../assets/images/profile.jpg'
import profile2 from '../../assets/images/profile1.jpg'
import profile3 from '../../assets/images/profile2.jpg'
import profile4 from '../../assets/images/profile3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
    const blogCards = [
        {
            image:img1,
            title:'Quick-start guide to nuts and seeds',
            profile:profile1,
            name:'Kevin Ibrahim'
        },
        {
            image:img2,
            title:'Nutrition: Tips for Improving Your Health',
            profile:profile2,
            name:'Mike Jackson'
        },
        {
            image:img3,
            title:'The top 10 benefits of eating healthy',
            profile:profile3,
            name:'Bryan McGregor'
        },
        {
            image:img4,
            title:'Quick-start guide to nuts and seeds',
            profile:profile4,
            name:'Julian Augusto'
        },
        {
            image:img1,
            title:'Quick-start guide to nuts and seeds',
            profile:profile1,
            name:'Kevin Ibrahim'
        },
        {
            image:img2,
            title:'Nutrition: Tips for Improving Your Health',
            profile:profile2,
            name:'Mike Jackson'
        },
        {
            image:img3,
            title:'The top 10 benefits of eating healthy',
            profile:profile3,
            name:'Bryan McGregor'
        },
    ]
    const[scrollX,setScrollX] = useState(0)

    const length = blogCards.length * 250

    const scrollRight= () =>{
        var newScrollX = scrollX - 350
        setScrollX(newScrollX)
    }

    const scrollLeft= () =>{
        var newScrollX = scrollX + 350
        setScrollX(newScrollX)
    }
    
 
    return (
        <div className='blog-container'>
            <div className='title-subtitle'>
                <h1>Read Our Blog</h1>
                <p>Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts</p>
            </div>
            {scrollX >= -length &&
                <div className='blog-icon-right' onClick={scrollRight}>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                </div>
            }
            
            <div className='container-cards'>
                <div className='carrousel-cards' style={{marginLeft:scrollX}}>
                {blogCards.map((card,index) =>(
                    <BlogCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    profile={card.profile}
                    name={card.name}
                    />
                ))} 
                <div className='gradient'></div>
                </div>              
            </div>
            {scrollX != 0 &&
            <div className='blog-icon-left' onClick={scrollLeft} >
                <FontAwesomeIcon icon={faLongArrowAltLeft}/>
            </div>
            }
        </div>
    )
}
