import { createContext, useState } from "react";

export const LocalContext = createContext();

const LocalProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    return (
        <LocalContext.Provider value={{ email, setEmail }}>
            {children}
        </LocalContext.Provider>
    );
}

export default LocalProvider;