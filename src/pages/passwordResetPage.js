import React from "react"
import { Link } from 'react-router-dom'
import logoImg from "../assets/images/logo-desapega.png"
import "../styles/login&SignupPage.css"

export default function PasswordResetPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="" />
      <h1>Esqueceu sua senha?</h1>

      <p>Não se preocupe! Insira o seu e-mail de cadastro e enviaremos um codigo para recuperação da sua senha</p>

      <form onSubmit={() => {}} method="post">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />


        <button type="submit" className="btn btn-entry">Enviar código</button>
      </form>

      <span>
        Volte para <Link to="/login">Entrar</Link>
      </span>
    </div>
  );
}
