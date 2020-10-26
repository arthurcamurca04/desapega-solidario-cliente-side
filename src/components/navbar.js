import React from 'react'
import logoImg from '../assets/images/logo-desapega.png'
import { FiMessageSquare, FiUser, FiGrid } from 'react-icons/fi'
import '../styles/navbar.css'

export default function Navbar(){
    return (
        <div className="nav-container">
            <img src={logoImg} alt="Desapega solidário"/>

            <ul className="nav-menu">
                <li><FiGrid size={16}/><a href="http://#">Meus anúncios</a></li>
                <li><FiMessageSquare size={16}/><a href="http://#">Chat</a></li>
                <li><FiUser size={16}/><a href="http://#">Entrar</a></li>
                <li><button type="button">Anunciar</button></li>
            </ul>
        </div>
    )
}