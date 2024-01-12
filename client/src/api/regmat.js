import axios from "./axios";

export const createRegmatRequest = (regmat) => axios.post(`/registerpdc`, regmat); 