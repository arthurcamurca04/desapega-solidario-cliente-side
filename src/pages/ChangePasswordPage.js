import React from "react"
import { Link } from 'react-router-dom'
import logoImg from "../assets/images/desapega.png"
import "../styles/login&SignupPage.css"

export default function ChangePasswordPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="Desapega" />
      <h1>Alterar senha</h1>

      <form onSubmit={() => {}} method="post">

        <label htmlFor="password">Nova senha</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirm-password">Confirmar senha</label>
        <input type="password" name="confirm-password" id="confirm-password" />

        <button type="submit" className="btn btn-entry">
          Alterar
        </button>
      </form>

      <span>
        Voltar para perfil <Link to="/users/security">Perfil</Link>
      </span>
    </div>
  );
}
