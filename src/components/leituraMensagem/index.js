import { useState, useEffect } from "react"
import MensagemService from "../../services/mensagemService"

export default function LeituraMensagem(){
    const mensagemService = new MensagemService();

    const [mensagensData, setMensagensData] = useState([]);

    useEffect(() => {
        loadMensagens();
    }, []);

    const loadMensagens = async () => {
        const response = await mensagemService.loadMensagens();
        try {
            setMensagensData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <div className="main-leitura">
            <div>
                

            </div>
        </div>
        </>
    )
}