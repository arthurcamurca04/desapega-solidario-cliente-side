import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FiHeart, FiShare2, FiUser } from "react-icons/fi";
import "../styles/productDetails.css";
import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  return (
    <div>
      <Navbar />
      <div className="product-details-container">
        <div className="product-details">
          <h1>Bicicleta Aro 19</h1>

          <div className="product-images">
            <div className="left">
              <div className="image"></div>
              <div className="image"></div>
              <div className="image"></div>
              <div className="image"></div>
              <div className="image"></div>
            </div>
            <div className="right">
              <div className="image"></div>
            </div>
          </div>

          <p>Bicicleta vermelha, aro 19, 6 meses de uso</p>

          <div className="interactions-buttons">
            <button type="button" className="button">
              <FiHeart />
              Favoritar
            </button>
            <button type="button" className="button">
              <FiShare2 />
              Compartilhar
            </button>
          </div>

          <h3>Detalhes</h3>
          <div className="details">
            <div className="category">
              <h4>Categoria</h4>
              <span>Lazer</span>
            </div>
            <div className="post">
              <h4>Postagem</h4>
              <span>29 de out 2020</span>
            </div>
            <div className="cep">
              <h4>CEP</h4>
              <span>58765-000</span>
            </div>
          </div>
        </div>
        <div className="donator-info">
          <div>
            <h2>Arthur</h2>
            <strong>Status: Ativo</strong>

            <button className="button">Contato</button>
          </div>

          <div className="profile">
            <Link to="/user/profile">
              <FiUser /> Ver perfil do doador
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
