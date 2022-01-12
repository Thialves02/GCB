import React from 'react'
import './Membership.css'
import memberImg from '../../assets/images/bloco_final_image.svg'
import Button from '../Button/Button'

export default function Membership() {
    return (
        <div className="member-container">
            <div className="member-infos">
                <h1 >Join our membership <br/> to get special offer</h1>
                <div className="intro-inputs">
                    <input placeholder="Enter your email address"/>
                    <Button
                    title='Join'
                    />
                </div>
            </div>
            <img src={memberImg}/>
        </div>
    )
}
