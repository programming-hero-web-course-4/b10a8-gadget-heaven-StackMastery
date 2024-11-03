import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {

    const [gadgets, setGadgets] = useState('Hllo');

    return (
        <>
            <AppContext.Provider 
                value={{
                    gadgets, setGadgets
                }}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export default AppContextProvider