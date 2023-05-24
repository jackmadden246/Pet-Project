import { dogProfiles } from "../components/BackendData";
import CharlieImage from "../assets/Charlie-portrait.jpg";
import classes from "../styles/CharlieProfile.module.css";


const CharlieProfilePage = () => {
    const charlieProfileData = dogProfiles;
    const charlieData = charlieProfileData.map((item, i) => (
            <div className={classes.div} key={i}> 
            <h1 className={classes.title}>{item.charlieTitle}</h1>
            <p className={classes.text}>{item.charlieTitle}</p>
            </div>
    ))

    return ( 
        <div className={classes.div}>
        {charlieData}
        <img className={classes.image} src={CharlieImage} />
        </div>
        );
    };

export default CharlieProfilePage;

