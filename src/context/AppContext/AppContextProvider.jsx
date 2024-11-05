import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {

    const [activeCategory, setactiveCategory] = useState(1);
    const [allGadgetsData, setallGadgetsData] = useState();
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [activeDashboardTabs, setactiveDashboardtabs] = useState(true);

    return (
        <>
            <AppContext.Provider 
                value={{
                    activeCategory, setactiveCategory,
                    allGadgetsData, setallGadgetsData ,
                    cart, setCart,
                    activeDashboardTabs, setactiveDashboardtabs,
                    wishList, setWishList
                }}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export default AppContextProvider