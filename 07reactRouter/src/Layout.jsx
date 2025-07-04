import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
//rest of the layout will remain static, the outlet part 
//will change dynamically. Here we have injected it in the middle, so that
//home route, about us etc will fit here.

function Layout(){

    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )

}

export default Layout;

//now we can't just use this layout however we want there is a proper syntax for it.
