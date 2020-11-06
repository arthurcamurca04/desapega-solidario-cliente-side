import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/images/desapega.png'
import { FiMessageSquare, FiUser, FiGrid } from 'react-icons/fi'
import '../styles/navbar.css'

export default function Navbar(){
    return (
        <div className="nav-container">
            <Link to="/"><img src={logoImg} alt="Desapega solidário"/></Link>

            <ul className="nav-menu">
                <li><FiGrid size={16}/><Link to="/announcements">Meus anúncios</Link></li>
                <li><FiMessageSquare size={16}/><a href="http://#">Chat</a></li>
                <li><FiUser size={16}/><Link to="/login">Entrar</Link></li>
                <li><Link className="announcement-btn" to="/product/add">Anunciar</Link></li>
            </ul>
        </div>
    )
}