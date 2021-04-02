import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http: //localhost:9000",
    headers: { Auth: "Simple Auth" },
    timeout: 3000,
})