import { createContext, useState } from "react";

export const MainContext = createContext();


const MainProvider = ({ children }) => {

    const [nome, setNome] = useState("Gleidson");

    return (
        <MainContext.Provider value={{ nome, setNome }}>
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;