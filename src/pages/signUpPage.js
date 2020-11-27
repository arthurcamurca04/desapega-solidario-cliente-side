import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../assets/images/desapega.png";
import GoogleButton from "react-google-button";
import api from "../services/api";
import "../styles/login&SignupPage.css";

export default function SignUpPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  function showPasswordToggle() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  async function handleSubmit(event){
    event.preventDefault();
    const data = {
      nome,
      email,
      senha
    }

    console.log(data)
    const res = await api.post("signup", data);
    console.log("Resposta:",res)
    alert("Cadastro realizado com sucesso!");
    history.push("/login")
  
  }
  
  return (
    <div className="login-container">
      <Link to="/"><img src={logoImg} alt="" /></Link>
      <h1>Crie sua conta</h1>

      <GoogleButton
        type="dark"
        onClick={() => {
          console.log("Google button clicked");
        }}
        label="Entrar com o Google"
      />

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="name"
          nome="nome"
          id="nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="senha">Senha</label>

        <input
          type={isPasswordVisible ? "text" : "password"}
          name="senha"
          id="senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <div className="show-password">
          <input
            onClick={showPasswordToggle}
            type="checkbox"
            name="showPassword"
          />{" "}
          <span> Show password</span>
        </div>

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
