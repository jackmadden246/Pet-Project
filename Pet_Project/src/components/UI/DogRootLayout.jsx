import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const DogRootLayout = () => {
    return (
        <> 
        <Navbar />
        <Outlet />
        </>
    );
};

export default DogRootLayout;