import { Outlet } from "react-router";
import Header from "./components/header";

function Layout () {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}
export default Layout