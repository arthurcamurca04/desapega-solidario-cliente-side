import React from "react"
import { Link } from 'react-router-dom'
import logoImg from "../assets/images/desapega.png"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import "../styles/login&SignupPage.css"

export default function SignUpPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="" />
      <h1>Crie sua conta</h1>

      <button type="button" className="btn btn-facebook">
        <FaFacebookF size={16} />
        <span>Entrar com o Facabook</span>
      </button>
      <button type="button" className="btn btn-google">
        <FaGoogle size={16} />
        <span>Entrar com o Google</span>
      </button>
      <span>Ou</span>

      <form onSubmit={() => {}} method="post">
        <label htmlFor="name">Nome</label>
        <input type="name" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Senha</label>

        <input type="password" name="password" id="password" />

        <button type="submit" className="btn btn-entry">
          Cadastrar
        </button>
      </form>

      <span>
        Já possui conta? <Link to="/login">Entrar</Link>
      </span>
    </div>
  );
}
