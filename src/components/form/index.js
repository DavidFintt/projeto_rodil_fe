import "./index.css";
import MensagemService from "../../services/mensagemService";
import { useState } from "react";

export default function FormMensagem() {
  const mensagemService = new MensagemService();

  const [mensagemData, setMensagemData] = useState({
    nome: "",
    pergunta: "",
  });

  const palavrasProibidas = [
    "caralho",
    "porra",
    "merda",
    "foda",
    "foda-se",
    "puta",
    "puta que pariu",
    "cu",
    "corno",
    "pinto",
    "buceta",
    "p1nto",
    "c4r4lh0",
    "c4ralho",
    "pint0",
  ];

  const [contadorCaractere, setContadorCaractere] = useState(0);

  const toggleContadorCaractere = (e) => {
    setContadorCaractere(e.target.value.length);
  };

  const toggleNomeMensagem = (e) => {
    setMensagemData({
      ...mensagemData,
      nome: e.target.value,
    });
  };

  const togglePerguntaMensagem = (e) => {
    setMensagemData({
      ...mensagemData,
      pergunta: e.target.value,
    });
  };

  const enviarMensagem = async () => {
    if (mensagemData.nome === "" || mensagemData.pergunta === "") {
      alert("Preencha todos os campos!");
      return;
    }
    if (mensagemData.pergunta.length < 10 || mensagemData.nome.length < 2) {
      alert("Pergunta deve conter no minimo 10 caracteres, e nome 2.");
      return;
    }
    if (mensagemData.pergunta.length > 255) {
      alert("Sua pergunta deve conter no máximo 255 caracteres!");
      return;
    }
    if (mensagemData.nome.length > 30) {
      alert("Seu nome deve conter no máximo 30 caracteres!");
      return;
    }
    if (
      mensagemData.pergunta
        .split(" ")
        .some((word) => palavrasProibidas.includes(word))
    ) {
      alert("Sua pergunta contém palavras proibidas!");
      return;
    }
    if(mensagemData.nome.split(" ").some((word) => palavrasProibidas.includes(word))) {
      alert("Seu nome contém palavras proibidas!");
      return;
    }
    const response = await mensagemService.insertMensagem(mensagemData);
    try {
      console.log(response);
      if (response.status === 201) {
        alert("Mensagem enviada com sucesso!");
        setMensagemData({
          nome: "",
          pergunta: "",
        });
      } else {
        alert("Erro ao enviar mensagem!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="div-form">
        <div className="sub-div-form">
          <div className="div-title">
            <span className="title-home">Bem vindo ao Pergunte ao Rodela</span>
          </div>
          <label className="labels-form">Digite seu nick:</label>
          <input
            onChange={(e) => toggleNomeMensagem(e)}
            maxLength={30}
            type="text"
            id="nick"
            name="nick"
            className="form-control input-form"
            placeholder="Digite seu nick ou seu nome"
            value={mensagemData.nome}
          ></input>
          <label className="labels-form">Faça sua pergunta ao rodela:</label>
          <textarea
            onChange={(e) => {
              toggleContadorCaractere(e);
              togglePerguntaMensagem(e);
            }}
            maxLength={255}
            id="question"
            name="question"
            className="form-control input-form"
            placeholder="Faça sua pergunta ao rodela"
            value={mensagemData.pergunta}
          ></textarea>
          <label className="caractere-label">
            Caracteres: {contadorCaractere}
          </label>
        </div>
        <button onClick={enviarMensagem} className="btn btn-form btn-submit">
          Enviar
        </button>
      </div>
    </>
  );
}
