import './index.css'
import AuthService from '../../services/auth';
import { useState, useEffect } from 'react';

export default function LoginView() {
  const authService = new AuthService();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });


  const toggleLogin = async () => {
    const response = await authService.getToken(loginData);
    try{
      console.log(response);
      if(response.status === 200){
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        window.location.href = '/perguntas';
      }else{
        alert("Erro ao efetuar login!");
      }
    } catch(error){
      console.log(error);
    }
  }

  const toggleUsername = (e) => {
    setLoginData({
      ...loginData,
      username: e.target.value,
    });
  }

  const togglePassword = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  }
  return (
    <>
      <div id="main-login">
        <div className="container-login">
            <div className="sub-container-login">
                <label className='label-login'>Usuário:</label>
                <input type="text" placeholder='Digite seu usuário' onChange={(e) => toggleUsername(e)} value={loginData.username} className="form-control input-login"></input>
                <br></br>
                <label className='label-login'>Senha:</label>
                <input type="password" placeholder='Digite sua senha' onChange={(e) => togglePassword(e)} value={loginData.password} className="form-control input-login"></input>
                <div className='button-container'>
                  <button onClick={toggleLogin} className="btn btn-login">Entrar</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
