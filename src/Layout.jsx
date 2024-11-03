import { Outlet } from "react-router-dom";
import AppContextProvider from "./context/AppContext/AppContextProvider";
import Header from "./components/Layout/Header/ Header";

const Layout = () => {
  return (
    <>
      <AppContextProvider>
        <Header />
        <Outlet/>
        <h1>Footer</h1>
      </AppContextProvider>
    </>
  );
}

export default Layout