import Banner from "../../components/Section/HeroBanner/Banner";
import { useEffect, useState } from "react";
import GadgetShowcase from "../../components/Section/GadgetShowcase/GadgetShowcase";

const Home = () => {
    return (
        <>
            <Banner/>
            <GadgetShowcase/>
        </>
    );
}

export default Home;
