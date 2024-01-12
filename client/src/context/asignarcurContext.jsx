import { createContext, useContext, useState } from "react";
import {createAsiganrcurRequest} from "../api/asignarcur.js"



export const AsignarcurContext = createContext();

export const useAsignarCE = () => {
    const context = useContext(AsignarcurContext);

    if (!context) {
        throw new Error('use Regmat must be used within a RegmatProvider');
    }

    return context;
}



export function AsiganarcurProvider({ children }) { 

    const [asigcur] = useState([]);


    const createAsignarCE = async (asigcur) => {
        const res = await createAsiganrcurRequest(asigcur); 
        console.log(res) 
    };


    return<AsignarcurContext.Provider value={{
        asigcur,
        createAsignarCE
    }}>{children}</AsignarcurContext.Provider>;
}