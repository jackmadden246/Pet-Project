import WelcomeMessage from "./components/Welcome";
import FredDescription from "./components/Fred";
import FredImage from "./assets/Fred.jpg";
import RupertDescription from "./components/Rupert";
import RupertImage from "./assets/Rupert.jpg";
import RosyDescription from "./components/Rosy";
import RosyImage from "./assets/Rosy.jpg";
import classes from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import FredProfilePage from "./pages/FredProfile";
import RupertProfilePage from "./pages/RupertProfile";
import RosyProfilePage from "./pages/RosyProfile";

function App() {

  return ( 
    <>
    <Routes> 
   <Route path="/FredProfile" element= {<FredProfilePage />}
   /> 
   <Route path="/RupertProfile" element = {<RupertProfilePage />}
   /> 
   <Route path="/RosyProfile" element = {<RosyProfilePage />} 
   />
   </Routes>

    <WelcomeMessage
    title='Pet Sanctuary Project' 
    text='This is a project dedicated to showcasing beautiful animals that have had tragic lives, and would be very appreciative of a loving home.' 
    details='Feel free to click on a pet below and find out their story:' 
  />
  <div className = {classes.div}> 
    <FredDescription 
    image={FredImage}
    />

    <RupertDescription 
    image={RupertImage}
    />

    <RosyDescription 
    image={RosyImage}
    />
  </div>
    </>
  );
}

export default App
