import React from "react"
import { Link } from 'react-router-dom'
import logoImg from "../assets/images/desapega.png"
import GoogleButton from 'react-google-button'
import "../styles/login&SignupPage.css"

export default function LoginPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="" />
      <h1>Acesse sua conta</h1>
      <GoogleButton type="dark" onClick={()=>{
        console.log("Google button clicked")
      }} label="Entrar com o Google"/>
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
