import { BrowserRouter, Route, Routes } from "react-router-dom";
import FredProfilePage from "./pages/FreddyProfile";
import RosyProfilePage from "./pages/RosyProfile";
import PorshaProfilePage from "./pages/PorshaProfile";
import HomePage from "./pages/Home";

function App() {

  return ( 
    <>
    <BrowserRouter> 
    <Routes> 
    <Route path="/" element={<HomePage />}
   /> 
   <Route path="/FredProfile" element={<FredProfilePage />}
   /> 
   <Route path="/RosyProfile" element={<RosyProfilePage />}
   /> 
   <Route path="/PorshaProfile" element={<PorshaProfilePage />} 
   />
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App
