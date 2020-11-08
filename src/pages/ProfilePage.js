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

        <aside className="aside-menu">
          <ul>
            <li>
              <FiClipboard size={16} />
              <Link to="/"> Informações pessoais</Link>
            </li>
            <li>
              <FiLock size={16} />
              <Link to="/"> Segurança e privacidade</Link>
            </li>
          </ul>
        </aside>

        <form onSubmit={() => {}} method="post">
          <fieldset>
            <legend>Dados da conta</legend>

            <label htmlFor="name">Nome completo</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="phone">Telefone</label>
            <input type="text" name="phone" id="phone" />

            <div className="address">
              <label htmlFor="street">Rua</label>
              <input type="text" name="street" id="street" />

              <label htmlFor="number">Número</label>
              <input type="number" name="number" id="number" />

              <label htmlFor="complement">Complemento</label>
              <input type="text" name="complement" id="complement" />

              <label htmlFor="cep">CEP</label>
              <input type="text" name="cep" id="cep" />

              <label htmlFor="state">Estado</label>
              <select name="state" id="state">
                  <option value="0">Paraíba</option>
              </select>

              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" id="city"/>
            </div>

            <button type="submit">Salvar alterações</button>
          </fieldset>
        </form>
      </div>

      <Footer />
    </div>
  );
}
