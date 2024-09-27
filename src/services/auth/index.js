import axios from "axios";
import api from "../interceptor";

const token = localStorage.getItem("access_token");

class AuthService {
    async getToken(data) {
        try{
            const response = await api.post('/api/token/', data);
            return response
        } catch (error) {
            console.log(error.response)
            return error.response.data
        } 

    }

    async refresh(data) {
        try{
            const response = await api.post('/api/token/refresh/', data);
            return response
        } catch (error) {
            console.log(error.response)
            return error.response.data
        } 

    }

}

export default AuthService;