import RosyImage from "../assets/Rosy.webp";
import classes from "../styles/RosyProfile.module.css";

const RosyProfilePage = () => {
    return (
        <>
        <h1 className={classes.title}>Rosy: the reclusive Shih Tzu</h1>
        <div className={classes.div}>
        <p className={classes.text}>
            Rosy is one of a kind. She loves nature, short walks by the beach, but you wouldn't catch her at a nightclub. 
            Choose Rosy if you want a dog that everyone of all ages will love. 
         </p>
        <img src={RosyImage}></img>
        </div>

        </>
    );
}

export default RosyProfilePage;