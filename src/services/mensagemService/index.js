import axios from "axios";
import api from "../interceptor";

const token = localStorage.getItem("access_token");

class MensagemService {
    async loadMensagens(data) {
        try{
            const response = await api.post('/api/mensagens/load/', data);
            return response
        } catch (error) {
            console.log(error.response)
            return error.response.data
        } 

    }

    async insertMensagem(data) {
        try{
            const response = await api.post('/api/mensagens/insert/', data);
            return response
        } catch (error) {
            console.log(error.response)
            return error.response.data
        } 

    }

    async deleteMensagem(data) {
        try{
            const response = await api.post('/api/mensagens/delete/', data);
            return response
        } catch (error) {
            console.log(error.response)
            return error.response.data
        } 

    }

    async lerMensagem(data) {
        try{
            const response = await api.post('/api/mensagens/ler/', data);
            return response
        } catch (error) {
            console.log(error.response)
            return error.response.data
        } 

    }

}

export default MensagemService;