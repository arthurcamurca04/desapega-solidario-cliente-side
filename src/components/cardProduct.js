import React from "react";
import { FiCamera } from "react-icons/fi";
import "../styles/cardProduct.css";

export default function CardProduct() {
  return (
    <div className="card-product-container">
      <div className="card-image-container">
        <FiCamera size={42} />
        <span>Produto sem imagem</span>
      </div>

      <div className="card-body-container">
        <h3>Nome do produto</h3>
        <span>R$: 0,00</span>
      </div>
    </div>
  );
}
