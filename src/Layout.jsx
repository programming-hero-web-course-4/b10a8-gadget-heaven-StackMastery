import { Outlet } from "react-router-dom";
import AppContextProvider from "./context/AppContext/AppContextProvider";
import Header from "./components/Layout/Header/ Header";
import Footer from "./components/Layout/Footer/Footer";


const Layout = () => {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Outlet/>
        <Footer />
      </AppContextProvider>
    </>
  );
}

export default Layout