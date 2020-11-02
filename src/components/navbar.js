import React from 'react'
import { Link } from 'react-router-dom'
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
                <li><FiUser size={16}/><Link to="/login">Entrar</Link></li>
                <li><Link className="announcement-btn" to="/product/add">Anunciar</Link></li>
            </ul>
        </div>
    )
}