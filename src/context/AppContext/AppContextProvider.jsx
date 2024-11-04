import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {

    const [activeCategory, setactiveCategory] = useState(1);
    const [allGadgetsData, setallGadgetsData] = useState();

    return (
        <>
            <AppContext.Provider 
                value={{
                    activeCategory, setactiveCategory,
                    allGadgetsData, setallGadgetsData 
                }}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export default AppContextProvider