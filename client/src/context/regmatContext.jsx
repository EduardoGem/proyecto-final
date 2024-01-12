import { createContext, useContext, useState } from "react";
import { createRegmatRequest } from "../api/regmat";






export const RegmatContext = createContext();

export const useRM = () => {
    const context = useContext(RegmatContext);

    if (!context) {
        throw new Error('use Regmat must be used within a RegmatProvider'); 
    }

    return context;
}



export function RegmatProvider({ children }) {  

    const [regmat] = useState([]);


    const createRegmat = async (regmat) => {
        const res = await createRegmatRequest(regmat);
        console.log(res);
    };


    return<RegmatContext.Provider value={{
        regmat,
        createRegmat
    }}>{children}</RegmatContext.Provider>;
}