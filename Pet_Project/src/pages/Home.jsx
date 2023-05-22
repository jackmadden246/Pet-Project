import WelcomeMessage from "../components/Welcome";
import CharlieImage from "../assets/Charlie.jpg";
import RosyImage from "../assets/Rosy.jpg";
import PorshaImage from "../assets/Porsha-puppy.jpg";
import DogProfile from "../components/DogDescription";

const HomePage = () => {
return (
    <> 
    <WelcomeMessage
    title='Pet Sanctuary Project' 
    text='This is a project dedicated to showcasing beautiful animals that have had tragic lives, and would be very appreciative of a loving home.' 
    details='Feel free to click on a pet below and find out their story:' 
  />
  <div style = {{textAlign: "center"}}> 
    <DogProfile
    link="/CharlieProfile"
    image={CharlieImage}
    />

    <DogProfile 
    link="/PorshaProfile"
    image={PorshaImage}
    />

    <DogProfile
    link = "/RosyProfile"
    image={RosyImage}
    />
</div>
  </>
)
};

export default HomePage;