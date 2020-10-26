import React from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/searchArea.css";

export default function SeachArea() {
  return (
    <div className="search-container">
      <div className="search-area">
        <input type="search" placeholder="Buscar" />
        <button type="button"><FiSearch color="#fff" size={26}/></button>
      </div>

      <ul>
        <li><a href="http://#">Móveis</a></li>
        <li><a href="http://#">Eletrodomésticos</a></li>
        <li><a href="http://#">Vestiário</a></li>
        <li><a href="http://#">Brinquedos</a></li>
        <li><a href="http://#">Lazer</a></li>
      </ul>
    </div>
  );
}
