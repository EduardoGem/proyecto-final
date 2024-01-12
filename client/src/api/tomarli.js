import axios from "./axios";


export const getEstRequest = () => axios.get(`/listaes`);

export const createEstRequest = (listaes) => axios.post('/listaes', listaes);
