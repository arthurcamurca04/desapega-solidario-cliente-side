import axios from 'axios';

const api = axios.create({
    baseURL: "https://desapegasolidario.herokuapp.com/"
})

export default api;