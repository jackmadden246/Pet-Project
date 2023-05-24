import WelcomeMessage from "../components/Welcome";
import DogDescription from "../components/DogDescription";
import { welcomeText } from "../components/BackendData";
import CharlieImage from "../assets/Charlie.jpg";
import PorshaImage from "../assets/Porsha-puppy.jpg";
import RosyImage from "../assets/Rosy.jpg";

const HomePage = () => {
  const welcomeMessage = welcomeText.map(({w}) => w.title, w.text, w.details )
return (
    <> 
    <WelcomeMessage
    title='Pet Sanctuary Project' 
    text='This is a project dedicated to showcasing beautiful animals that have had tragic lives, and would be very appreciative of a loving home.' 
    details='Feel free to click on a pet below and find out their story:' 
  />
  <div style = {{textAlign: "center"}}> 
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

</div>
  </>
 
)
};

export default HomePage;