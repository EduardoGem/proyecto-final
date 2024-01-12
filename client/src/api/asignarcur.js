import axios from "./axios";

export const createAsiganrcurRequest = (asigcur) => axios.post(`/asignarce`, asigcur);  