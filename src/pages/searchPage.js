import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FiCamera, FiSearch } from "react-icons/fi";
import "../styles/searchPage.css";

export default function SearchPage() {
  return (
    <div>
      <Navbar />
      <div className="search-grid">
        <div className="sidebar">
          <div className="search-area">
            <input type="search" placeholder="Buscar" />
            <button type="search">
              <FiSearch color="#fff" size={26} />
            </button>
          </div>

          <div className="categories">
            <div className="category-title">
              <h3>Busca por categorias</h3>
            </div>

            <ul>
              <li>
                <a href="http://">
                  Móveis <span>(300)</span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Eletrodomésticos <span>(58)</span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Vestiário <span>(60)</span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Brinquedos <span>(10)</span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Lazer <span>(0)</span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Outros <span>(0)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="items-container">
          <div className="items-container-top">
            <strong>Todos os anúncios</strong>

            <div>
              <span>Ordenar por: </span>
              <select name="order" id="order">
                <option value="0">Mais recentes</option>
                <option value="1">Mais próximos</option>
              </select>
            </div>
          </div>

          <div className="items-list">
            <ul>
              <li>
                <div className="item-tile">
                  <div className="item-image">
                    <div>
                      <FiCamera color="#fff" size={42} />
                      <span>Produto sem imagem</span>
                    </div>
                  </div>
                  <div className="item-name">
                    <strong>Nome do item</strong>
                    <p>Patos/PB</p>
                  </div>
                  <div className="item-time">
                    <span>Hoje</span>
                    <br />
                    <span>12:00</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="item-tile">
                  <div className="item-image">
                    <div>
                      <FiCamera color="#fff" size={42} />
                      <span>Produto sem imagem</span>
                    </div>
                  </div>
                  <div className="item-name">
                    <strong>Nome do item</strong>
                    <p>Piancó/PB</p>
                  </div>
                  <div className="item-time">
                    <span>23/out</span>
                    <br />
                    <span>10:00</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
