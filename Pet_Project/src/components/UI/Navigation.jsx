import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomePage from "../../pages/Home";
import CharlieProfilePage from "../../pages/CharlieProfile";
import RosyProfilePage from "../../pages/RosyProfile";
import PorshaProfilePage from "../../pages/PorshaProfile";
import Navbar from "./Navbar";

const NavLayout = () => {
    <>
    <Navbar /> 
    <Outlet />
    </>
};


const  Navigation = () => {
    return (
    <>
    <Routes> 
    <Route path="/" element={<NavLayout />} />
    <Route index element={<HomePage />} /> 
   <Route path="CharlieProfile" element={<CharlieProfilePage />
   }
   /> 
   <Route 
   path="RosyProfile" 
   element={<RosyProfilePage />
   }
   /> 
   <Route 
   path="PorshaProfile" 
   element={<PorshaProfilePage />
   } 
   />
   </Routes>
    </>
    );
};

export default Navigation;