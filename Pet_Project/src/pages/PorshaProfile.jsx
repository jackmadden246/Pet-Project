import { dogProfiles } from "../components/BackendData";
import classes from "../styles/PorshaProfile.module.css";
import PorshaImage from "../assets/Porsha.jpg";

const PorshaProfilePage = () => {
    const porshaProfileData = dogProfiles;
    const porshaData = porshaProfileData.map((item, i) => (
        <div className={classes.div} key={i}> 
        <h1 className={classes.title}>{item.porshaTitle}</h1>
        <p className={classes.text}>{item.porshaTitle}</p>
        </div>
));

        return ( 
            <div className={classes.div}>
            {porshaData}
            <img className={classes.image} src={PorshaImage} />
            </div>
            );
};

export default PorshaProfilePage;