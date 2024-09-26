import logo from "../../assets/logo/logo.png";
import "./index.css";
import MensagemService from "../../services/mensagemService";
import { useState, useEffect } from "react";

export default function Home() {
    const mensagemService = new MensagemService();

    const [mensagemData, setMensagemData] = useState({
        nome: "",
        pergunta: ""
    })


    const toggleNomeMensagem = (e) => {
        setMensagemData({
            ...mensagemData,
            nome: e.target.value
        })
    }

    const togglePerguntaMensagem = (e) => {
        setMensagemData({
            ...mensagemData,
            pergunta: e.target.value
        })
    }

    const enviarMensagem = async () => {
        const response = await mensagemService.insertMensagem(mensagemData);
        try{
            console.log(response)
            if (response.status === 201) {
                alert("Mensagem enviada com sucesso!");
            } else {
                alert("Erro ao enviar mensagem!");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div id="main">
            <div className="container">
                <img className="logo-rodela" src={logo}></img>
                <div className="div-form">
                    <div className="sub-div-form">
                        <label className="labels-form">Digite seu nick ou seu nome:</label>
                        <input onChange={(e) => toggleNomeMensagem(e)} maxLength={30} type="text" id="nick" name="nick" className="form-control input-form" placeholder="Digite seu nick ou seu nome"></input>
                    </div>
                    <div className="sub-div-form">
                        <label className="labels-form">Faça sua pergunta ao rodela:</label>
                        <textarea onChange={(e) => togglePerguntaMensagem(e)} maxLength={300} id="question" name="question" className="form-control input-form" placeholder="Faça sua pergunta ao rodela"></textarea>
                    </div>
                    <button onClick={enviarMensagem} className="btn btn-form btn-submit">Enviar</button>
                </div>
            </div>
        </div>
        </>
    );
}