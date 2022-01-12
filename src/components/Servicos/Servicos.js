import React from 'react'
import './Servicos.css'
import servicoImg from '../../assets/images/bloco_services.svg'
import Button from '../Button/Button'

export default function Servicos() {
    return (
        <div className='servicos-container'>
            <img src={servicoImg}/>
            <div className='servicos-infos'>
                <h1>The best services ready <br/> To serve you</h1>
                <p>Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts.</p>
                <p>Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and
                supplies it with the necessary regelialia.</p>
                <Button
                title="Know More"
                />
            </div>
            
        </div>
    )
}
