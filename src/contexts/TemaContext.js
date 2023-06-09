import { createContext, useState } from "react";
import { escuro, claro } from "../estilosGlobais";

export const TemaContext = createContext({})

export const TemaProvider = () => {
    const [temaAtual, setTemaAtual] = useState("escuro")

    return (
        <TemaContext.Provider
            value={{
                valor, nome, setNome
            }} >
                {children}
        </TemaContext.Provider>
    )
}