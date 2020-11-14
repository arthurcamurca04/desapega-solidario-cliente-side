import React from "react";
import Navbar from "../components/navbar";
import SearchArea from "../components/searchArea";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FiClipboard, FiLock } from "react-icons/fi";
import "../styles/profilePage.css";

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <SearchArea />
      <div className="profile-container">
        <h1>Meu perfil</h1>
        <div className="container">
          <aside className="aside-menu">
            <ul>
              <li>
                <FiClipboard size={16} />
                <Link to="/users/profile"> Informações pessoais</Link>
              </li>
              <li>
                <FiLock size={16} />
                <Link to="/users/security"> Segurança e privacidade</Link>
              </li>
            </ul>
          </aside>

          <form onSubmit={() => {}} method="post">
            <fieldset>
              <legend>
                <strong>Dados da conta</strong>
              </legend>

              <input type="text" name="name" id="name" placeholder="Nome completo"/>
              
              <input type="email" name="email" id="email" placeholder="E-mail"/>

              <input type="text" name="phone" id="phone" placeholder="Telefone"/>

              <div className="address-location">
                <div>
                  <input type="text" name="street" id="street" placeholder="Rua"/>                  
                  <input min="0" type="number" name="number" id="number" placeholder="Número" />
                  <input type="text" name="complement" id="complement" placeholder="Complemento"/>
                </div>

                <div>
              
                  <input type="text" name="cep" id="cep" placeholder="CEP"/>
                  <select name="state" id="state">
                    <option value="0">Paraíba</option>
                  </select>
                  <input type="text" name="city" id="city" placeholder="Cidade"/>
                </div>
              </div>
            </fieldset>
            <button type="submit">Salvar alterações</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
