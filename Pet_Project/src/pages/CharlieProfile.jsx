import CharlieImage from "../assets/Charlie-portrait.jpg";
import classes from "../styles/CharlieProfile.module.css";

const CharlieProfilePage = () => {
    return (
        <>
        <h1 className={classes.title}>Charlie Chin: The funny but delightful puppy</h1>
        <div className={classes.div}> 
        <p className={classes.text}>
            Say hello to Charlie. He enjoys affection, cuddling and everything else. 
            Pick Charlie if you want a dog for life. Beware! His cute eyes can seduce even the most cold-hearted.
            </p>
        <img className={classes.image} src={CharlieImage}></img>
        </div>

        </>
    );
};

export default CharlieProfilePage;
