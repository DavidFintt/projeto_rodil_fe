import MensagemService from "../../services/mensagemService";
import logo from "../../assets/logo/logo.png";
import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function PerguntasView() {
  const mensagemService = new MensagemService();
  const [mensagens, setMensagens] = useState([]);
  const [contadorMensagens, setContadorMensagens] = useState(0);
  useEffect(() => {
    loadMensagens();
  }, []);

  const loadMensagens = async () => {
    const response = await mensagemService.loadMensagens();
    try {
      if (response.status === 200) {
        let mensagensFilter = response.data.filter(el => el.lida === false).sort(() => Math.random() - 0.5)
        console.log(response)
        console.log(mensagensFilter)
        setMensagens(mensagensFilter);
      } else {
        alert("Erro ao carregar mensagens!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const toggleProxima = () => {
    if (contadorMensagens === mensagens.length) {
      setMensagens([]);
      return
    }
    setContadorMensagens(contadorMensagens + 1);
    toggleLerMensagem()
  }

  const toggleLerMensagem = async () => {
    const response = await mensagemService.lerMensagem({
      mensagem_id: mensagens[contadorMensagens].id,
    });
    try {
      if (response.status === 200) {
        return
      } else {
        console.log("Erro ao ler mensagem!");
      }
    } catch (error) {
    }
  }
  return (
    <>
      <div id="main-perguntas">
        <div className="container-perguntas">
          <img className="logo-rodela-perguntas" src={logo}></img>
          {mensagens[contadorMensagens] && (
            <div className="card">
              <div className="card-body">
                <label className="pergunta-label">Nick:</label>
                <h5 className="card-title nick-h5">
                  {mensagens[contadorMensagens].nome}
                </h5>
                <label className="pergunta-label">Pergunta:</label>
                <p className="card-text pergunta-h5">
                  {mensagens[contadorMensagens].pergunta}
                </p>
              </div>
            </div>
          )}
          <div className="button-container">
            {mensagens.length > 0 && (
                <button onClick={toggleProxima} className="btn btn-proxima">
                    Próxima
                </button>
            )} 
            {mensagens.length === 0 && (
                <>
                <br></br>
                <div className="alert alert-warning" role="alert">
                    Não há perguntas!
                </div>
                <Link to="/">
                    <button className="btn btn-voltar">
                        Voltar ao início
                    </button>
                </Link>
                </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
