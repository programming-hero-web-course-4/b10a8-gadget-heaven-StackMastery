import Banner from "../../components/Section/HeroBanner/Banner";
import { useContext, useEffect, useState } from "react";
import GadgetShowcase from "../../components/Section/GadgetShowcase/GadgetShowcase";
import { AppContext } from "../../context/AppContext/AppContextProvider";

const Home = () => {

    const {setheaderIsHome, headerIsHome } = useContext(AppContext)

    useEffect(() => {
        document.title = `Gadget Heaven`
        setheaderIsHome(true)
    }, [])

    return (
        <>
            <Banner/>
            <GadgetShowcase/>
        </>
    );
}

export default Home;
