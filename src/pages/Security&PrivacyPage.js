import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";
import SearchArea from "../components/searchArea";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { FiClipboard, FiLock } from "react-icons/fi";
import Modal from "react-modal";
import "../styles/profilePage.css";

export default function SecurityPage() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();

  function openModal(){
    setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false);
  }

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

              <button onClick={()=>{
                history.push('/password/update');
              }} type="button">Alterar senha</button>
            </div>

            <div>
              <h2>Excluir conta permanentemente</h2>
              <p>Dados da sua conta, anúncios e perfil serão definitivamente excluídos</p>
              <p>Não será possível recuperar sua conta</p>

              <button onClick={openModal} className="btn-danger" type="button">Excluir conta</button>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={
         {
           overlay: {
             backgroundColor: 'rgba(0,0,0,0.4)',
           },
           content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
          }
         }
        }
      >
        <h3>Excluir conta</h3>
        <p>Deseja realmente excluir essa conta?</p>

        <button className="modal-btn modal-btn-danger" type="button">Excluir</button>
        <button className="modal-btn modal-btn-primary" onClick={closeModal} type="button">Cancelar</button>
      </Modal>
    </div>
  );
}
