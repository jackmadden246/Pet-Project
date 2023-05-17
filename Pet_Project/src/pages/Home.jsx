import WelcomeMessage from "../components/Welcome";
import FreddyDescription from "../components/Freddy";
import FreddyImage from "../assets/Freddy.jpg";
import RosyDescription from "../components/Rosy";
import RosyImage from "../assets/Rosy.jpg";
import PorshaDescription from "../components/Porsha";
import PorshaImage from "../assets/Porsha-puppy.jpg";
import classes from "../styles/Home.module.css";

const HomePage = () => {
return (
    <> 
    <WelcomeMessage
    title='Pet Sanctuary Project' 
    text='This is a project dedicated to showcasing beautiful animals that have had tragic lives, and would be very appreciative of a loving home.' 
    details='Feel free to click on a pet below and find out their story:' 
  />
  <div className = {classes.div}> 
    <FreddyDescription 
    image={FreddyImage}
    />

    <PorshaDescription 
    image={PorshaImage}
    />

    <RosyDescription 
    image={RosyImage}
    />
  </div>
  </>
)
};

export default HomePage;