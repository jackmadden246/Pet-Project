import classes from "../styles/FreddyProfile.module.css";

const FredProfilePage = props => {
    return (
        <>
        <h1 className={classes.title}>Freddy: The funny but delightful puppy</h1>
        <p className={classes.text}>
            Say hello to Freddy. He enjoys affection, cuddling and anything else. Pick Fred if you want a puppy for life
            </p>
        <img className={classes.image}>{props.image}</img>

        </>
    );
};

export default FredProfilePage;
