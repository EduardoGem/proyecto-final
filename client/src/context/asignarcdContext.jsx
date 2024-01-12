import { createContext, useContext, useState } from "react";
import {createAsignarcdRequest} from "../api/asignarcd.js"



export const AsignarcdContext = createContext();

export const useAsignarCD = () => {
    const context = useContext(AsignarcdContext);

    if (!context) {
        throw new Error('use Regmat must be used within a RegmatProvider'); 
    }

    return context;
}



export function AsignarcdProvider({ children }) { 

    const [asignarcd] = useState([]);


    const createAsignarCD = async (asignarcd) => {
        const res = await createAsignarcdRequest(asignarcd);  
        console.log(res) 
    };


    return<AsignarcdContext.Provider value={{
        asignarcd,
        createAsignarCD
    }}>{children}</AsignarcdContext.Provider>;
}