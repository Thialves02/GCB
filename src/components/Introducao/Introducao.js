import React from 'react'
import homeImg from '../../assets/images/Illustration.svg'
import './Introducao.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Introducao() {
    return (
        <div className="intro-container">
            <div className="intro-infos">
                <h1>Ready for <br/> Trying a new <br/> Recipe?</h1>
                <div className="intro-inputs">
                    <input placeholder="Search healthy recipes"/>
                    <button><FontAwesomeIcon icon={faSearch}/></button>
                </div>
            </div>
            <img src={homeImg}/>
        </div>
    )
}
