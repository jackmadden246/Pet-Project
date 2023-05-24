import CharlieImage from "../assets/Charlie-portrait.jpg";
import classes from "../styles/CharlieProfile.module.css";

const CharlieProfilePage = () => {
    return (
        <>
        <div className={classes.div}> 
        <h1 className={classes.title}>Charlie Chin: the funny, furry and fantastic puppy</h1>
        <p className={classes.text}>
            Say hello to Charlie. He enjoys affection, cuddling and everything else. 
            Pick Charlie if you want a dog for life. Beware! His cute eyes can seduce even the most cold-hearted.
            </p>
        <img src={CharlieImage} />
        </div>
       
        </>
       
    );
};

export default CharlieProfilePage;

