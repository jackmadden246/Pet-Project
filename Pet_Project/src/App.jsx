import WelcomeMessage from "./components/Welcome";
import FredDescription from "./components/Fred";
import FredImage from "./assets/Fred.jpg";
import RupertDescription from "./components/Rupert";
import RupertImage from "./assets/Rupert.webp";
import RosyDescription from "./components/Rosy";
import RosyImage from "./assets/Rosy.jpg";

function App() {
  return ( 
    <>
    <WelcomeMessage
    title='Pet Sanctuary Project' 
    text='This is a project dedicated to showcasing beautiful animals that have had tragic lives, and would be very appreciative of a loving home.' 
    details='Feel free to click on a pet below and find out their story:' 
  />

    <FredDescription 
    title='Fred' 
    image={FredImage}
    />

    <RupertDescription 
    title='Rupert'
    image={RupertImage}
    />

    <RosyDescription 
    title='Rosy'
    image={RosyImage}
    />

    </>
  );
}

export default App
