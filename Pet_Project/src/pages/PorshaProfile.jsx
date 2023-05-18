import classes from "../styles/PorshaProfile.module.css";
import PorshaImage from "../assets/Porsha.jpg";
import Navbar from "../components/UI/Navbar";

const PorshaProfilePage = () => {
    return (
        <>
        <Navbar />
        <h1 className={classes.title}>Porsha: the pouting Pomeranian</h1>
        <div className={classes.div}> 
        <p className={classes.text}>
            Porsha's love of the snowy wilderness is talked about as often as David Atttenborough. 
            She has the courage of a lion and the heart of a whale.
            </p>
        <img className={classes.image} src={PorshaImage}></img>
        </div>
        </>
    );
};

export default PorshaProfilePage;