import { dogProfiles } from "../components/BackendData";
import RosyImage from "../assets/Rosy.webp";
import classes from "../styles/RosyProfile.module.css";

const RosyProfilePage = () => {
    const rosyProfileData = dogProfiles;
    const rosyData = rosyProfileData.map((item, i) => (
        <div className={classes.div} key={i}> 
        <h1 className={classes.title}>{item.rosyTitle}</h1>
        <p className={classes.text}>{item.rosyText}</p>
        </div>
));

        return ( 
            <div className={classes.div}>
            {rosyData}
            <img className={classes.image} src={RosyImage} />
            </div>
            );
}

export default RosyProfilePage;