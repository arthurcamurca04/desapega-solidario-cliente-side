import React from "react";
import CardProduct from "../components/cardProduct";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SearchArea from "../components/searchArea";
import "../styles/homePage.css";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <SearchArea />

      <div className="announcement-container">
        <h2>Anúncios recentes</h2>

        <div className="announcement-container-cards">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>

      <Footer/>
    </div>
  );
}
