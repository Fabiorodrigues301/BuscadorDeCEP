import axios from "axios";
//         beseURL           CEP     Formato 
//https://viacep.com.br/ws/01001000/json/ 

const API = axios.create({     

    baseURL: "https://viacep.com.br/ws/"
});


export default API;