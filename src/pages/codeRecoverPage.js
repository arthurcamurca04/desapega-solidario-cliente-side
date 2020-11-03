import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/desapega.png";
import "../styles/login&SignupPage.css";

export default function CodeRecoverPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="" />
      <h1>Código de recuperação</h1>

      <p>Insira o codigo de recuperação para poder criar uma nova senha.</p>

      <form onSubmit={() => {}} method="post">
        <label htmlFor="code">Código</label>
        <input type="text" name="code" id="code" />

        <button type="submit" className="btn btn-entry">
          Alterar senha
        </button>
      </form>

      <span>
        Volte para <Link to="/login">Entrar</Link>
      </span>
    </div>
  );
}
