import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="container">
      <div className="contact-section">
        <ul id="help-contact">
          <li>
            <a href="http://#">Ajuda</a>
          </li>
          <li>
            <a href="http://#">Contato</a>
          </li>
        </ul>

        <ul id="social-networks">
          <li>
            <a href="http://#">
              <FiFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="http://#">
              <FiTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="http://#">
              <FiInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="http://#">
              <FiLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="aboutus-section">
        <ul>
          <li>
            <a href="http://#">Sobre o Desapega</a>
          </li>
          <li>
            <a href="http://#">Termos de Uso</a>
          </li>
          <li>
            <a href="http://#">Política de Privacidade</a>
          </li>
        </ul>      
      </div>
    </footer>
  );
}
