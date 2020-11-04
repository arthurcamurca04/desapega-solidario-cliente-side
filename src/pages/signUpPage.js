import React from "react"
import { Link } from 'react-router-dom'
import logoImg from "../assets/images/desapega.png"
import GoogleButton from "react-google-button"
import "../styles/login&SignupPage.css"

export default function SignUpPage() {
  return (
    <div className="login-container">
      <img src={logoImg} alt="" />
      <h1>Crie sua conta</h1>

      <GoogleButton type="dark" onClick={()=>{
        console.log("Google button clicked")
      }} label="Entrar com o Goole"/>

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
