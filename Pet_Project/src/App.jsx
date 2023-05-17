import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharlieProfilePage from "./pages/CharlieProfile";
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
   <Route path="/CharlieProfile" element={<CharlieProfilePage />}
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
