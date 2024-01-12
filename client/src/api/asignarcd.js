import axios from "./axios";

export const createAsignarcdRequest = (asignarcd) => axios.post(`/asignardoc`, asignarcd);  