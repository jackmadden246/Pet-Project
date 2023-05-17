import classes from "../styles/PorshaProfile.module.css";
import PorshaImage from "../assets/Porsha.jpg";

const PorshaProfilePage = () => {
    return (
        <>
        <h1 className={classes.title}>Porsha: the pouting Pomeranian</h1>
        <p className={classes.text}>
            Porsha's love of the snowy wilderness is renown throughout the United Kingdom. She has the courage of a lion and the heart of whale
            </p>
        <img className={classes.image} src={PorshaImage}></img>

        </>
    );
};

export default PorshaProfilePage;