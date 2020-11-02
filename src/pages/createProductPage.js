import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FiCamera } from "react-icons/fi";
import "../styles/createProduct.css";

export default function CreateProductPage() {
  return (
    <div>
      <Navbar />

      <div className="container-create-product">
        <h1>O que você deseja doar?</h1>

        <form onSubmit={() => {}} method="post">
          <div id="title-description">
            <input type="text" name="category" placeholder="Título*" />
            <textarea maxLength="250" min="10" cols="10" rows="4"name="description" placeholder="Descrição*" />
          </div>

          <div className="categories">
            <h3>Categorias*</h3>
            <div className="container">
              <div>
                <input type="radio" name="category" id="moveis" value="moveis"/>
                <label htmlFor="moveis">Móveis</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="category"
                  id="eletrodomesticos"
                  value="eletrodomesticos"
                />
                <label htmlFor="eletrodomesticos">Eletrodomésticos</label>
              </div>

              <div>
                <input type="radio" name="category" id="vestiario" value="vestiario"/>
                <label htmlFor="vestiario">Vestiário</label>
              </div>

              <div>
                <input type="radio" name="category" id="brinquedos" value="brinquedos"/>
                <label htmlFor="brinquedos">Brinquedos</label>
              </div>

              <div>
                <input type="radio" name="category" id="lazer" value="lazer"/>
                <label htmlFor="moveis">Lazer</label>
              </div>

              <div>
                <input type="radio" name="category" id="outros" value="outros"/>
                <label htmlFor="outros">Outros</label>
              </div>
            </div>
          </div>

          <div className="photos">
            <h3>Fotos</h3>
            <p>Adicionar até 5 fotos</p>
            <div className="file-image">
              <FiCamera color="#ff5100" size={26} />
              <input
                multiple
                type="file"
                name="images"
                id="images"
                onChange={() => {}}
              />
              <p>Adicionar foto</p>
              <p>JPG, JPEG, PNG</p>
            </div>
          </div>

          <div className="localization-contact">
            <div>
              <label htmlFor="localization">
                <h3>Localização</h3>
              </label>
              <input type="text" name="localization" id="localization" />
            </div>

            <div>
              <label htmlFor="contact">
                <h3>Contato</h3>
              </label>
              <input type="text" name="contact" id="contact" />

              <div id="hide-contact">
                <input
                  type="checkbox"
                  name="hide-contact"
                  id="hide-contact"
                  checked
                />
                <label htmlFor="hide-contact">
                  Ocultar telefone nesta doação
                </label>
              </div>
            </div>
          </div>
          <p>As informações com (*) são obrigatórias</p>

          <button type="submit">Cadastrar anúncio</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
