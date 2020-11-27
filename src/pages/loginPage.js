import React, {useState, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../assets/images/desapega.png";
import GoogleButton from "react-google-button";
import StoreContext from "../Store/Context";
import api from '../services/api';
import "../styles/login&SignupPage.css";

function initialState() {
  return {
    email: "",
    password: "",
  };
}

export default function LoginPage() {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function handleChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    api
      .post("signin", values)
      .then((response) => {
        const { data } = response;

        if (data) {
          setToken(data.token);
          history.push("/");
        }
        console.log(data);
        setValues(initialState);
      })
      .catch((err) => {
        setValues(initialState);
        console.error("Erro: ", err);
      });
  }
  return (
    <div className="login-container">
      <Link to="/"><img src={logoImg} alt="Desapega" /></Link>
      <h1>Acesse sua conta</h1>
      <GoogleButton
        type="dark"
        onClick={() => {
          console.log("Google button clicked");
        }}
        label="Entrar com o Google"
      />
      <span>Ou</span>

      <form onSubmit={handleLogin} method="post">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />

        <div className="password-container">
          <label htmlFor="password">Senha</label>
          <Link to="/password/forgot">Esqueceu sua senha?</Link>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-entry">
          Entrar
        </button>
      </form>

      <span>
        Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
      </span>
    </div>
  );
}
