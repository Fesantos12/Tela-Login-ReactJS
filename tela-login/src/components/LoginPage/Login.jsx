import React from "react";

import "./Login.css";
import { useState } from 'react'


const Login = () => {
    
    function cadastrarUsuario(e) {
      e.preventDefault()
      console.log(`Usuario: ${email} cadastrado com a senha ${password}`)
      window.alert("Login efetuado com sucesso")
      window.alert(`Email: ${email}, Senha: ${password}`)

      if (email && password == undefined) {
        window.alert('Preencha todos os campos!')
      } if (email == undefined) {
        window.alert('Preencha todos os campos!')
      } if (password == undefined) {
        window.alert('Preencha todos os campos!')
      }
    }
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
          <div className="banana">
          <div className="LoginContainer">
            <h1>Login</h1>
            <form action="">
              <div className="EmailSenha">
                <input
                  type="Email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="RememberForgot">
                <a href="#">Esqueceu sua senha?</a>
              </div>
              <div className="ButtonFlex">
                <input
                  type="button"
                  value="Login"
                  className="Button"
                  onClick={cadastrarUsuario}
                />
              </div>
              <div className="CriarConta">
                <p>Não possui uma conta?</p>
                <a href="#">
                  <button>Criar Conta</button>
                </a>
              </div>
            </form>
          </div>
          </div>
        </>
      );
};

export default Login;
