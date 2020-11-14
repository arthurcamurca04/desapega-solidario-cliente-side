import React from "react";
import Navbar from "../components/navbar";
import SearchArea from "../components/searchArea";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FiClipboard, FiLock } from "react-icons/fi";
import "../styles/profilePage.css";

export default function SecurityPage() {
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
          <div class="security-container">
            <div>
              <h2>Alteração de senha</h2>
              <p>Escolha uma senha forte</p>
              <p>Escolha entre letras maiuscúlas e minuscúlas, símbolos e números</p>

              <button type="button">Alterar senha</button>
            </div>

            <div>
              <h2>Excluir conta permanentemente</h2>
              <p>Dados da sua conta, anúncios e perfil serão definitivamente excluídos</p>
              <p>Não será possível recuperar sua conta</p>

              <button className="btn-danger" type="button">Excluir conta</button>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
