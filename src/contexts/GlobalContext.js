import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export const InfoProvider = () => {
    const valor = 200
    const [nome, setNome] = useState("Giluan")

    return (
        <GlobalContext.Provider
            value={{
                valor, nome, setNome
            }} >
                {children}
            </GlobalContext.Provider>
    )
}