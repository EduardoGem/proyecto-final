import { createContext, useContext, useState } from "react";
import { getEstRequest } from "../api/tomarli.js";
import { createEstRequest } from "../api/tomarli.js";



export const TomarlistaContext = createContext();

export const useTLista = () => {
    const context = useContext(TomarlistaContext);

    if (!context) {
        throw new Error('use Regmat must be used within a RegmatProvider'); 
    }

    return context;
}



export function TomarListaProvider({ children }) {  
    
     const [asigcur, setValue] = useState();

    const getEstxCGP = async () => {
        const res = await getEstRequest();
        return (res.data);
    }


    const [listaes] = useState([]);


    const TomarListaEs = async (listaes) => {
        const res = await createEstRequest(listaes);  
        console.log(res) 
    };

    return<TomarlistaContext.Provider value={{
        listaes,
        TomarListaEs,
        getEstxCGP,
        asigcur
    }}>{children}</TomarlistaContext.Provider>; 
}