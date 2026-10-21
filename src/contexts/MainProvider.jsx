import { createContext } from "react";

export const MainContext = createContext();


const MainProvider = ({ children }) => {
    return (
        <MainContext.Provider>
            {children}
        </MainContext.Provider>
    );
}

export default MainProvider;