import React from "react"
import { Link } from 'react-router-dom'
import logoImg from "../assets/images/logo-desapega.png"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import "../styles/login&SignupPage.css"

export default function LoginPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="" />
      <h1>Acesse sua conta</h1>

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
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <div className="password-container">
          <label htmlFor="password">Senha</label>
          <Link to="/password/forgot">Esqueceu sua senha?</Link>
        </div>
        <input type="password" name="password" id="password" />

        <button type="submit" className="btn btn-entry">Entrar</button>
      </form>

      <span>
        Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
      </span>
    </div>
  );
}
