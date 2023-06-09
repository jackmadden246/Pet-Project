import WelcomeMessage from "../components/Welcome";
import DogDescription from "../components/DogDescription";
import CharlieImage from "../assets/Charlie.jpg";
import PorshaImage from "../assets/Porsha-puppy.jpg";
import RosyImage from "../assets/Rosy.jpg";

const HomePage = () => {
  
return (
    <> 
    <WelcomeMessage />

    <DogDescription
    link = "/dogs/Charlie"
    image={CharlieImage}
    />
    <DogDescription
     link = "/dogs/Porsha"
    image={PorshaImage}
    />

    <DogDescription
    link = "/dogs/Rosy"
    image={RosyImage}
    />
  </>
 
)
};

export default HomePage;