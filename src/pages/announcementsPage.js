import React from "react"
import CardProduct from "../components/cardProduct"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import SearchArea from "../components/searchArea"
import "../styles/announcementsPage.css"

export default function AnnouncementsPage(){
    return(
        <div>
            <Navbar/>
            <SearchArea />
                <div className="announcement-container">
                    <h2>Meus anúncios</h2>
                    
                    <ul>
                        <li><a href="http://">Ativos (1)</a></li>
                        <li><a href="http://">Congelados (0)</a></li>
                        <li><a href="http://">Doados (2)</a></li>
                        <li><a href="http://">Cancelados (0)</a></li>
                    </ul>
                    <div className="announcement-container-cards">
                        <CardProduct/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}