import classes from '../styles/FredProfile.module.css';

const FredProfilePage = props => {
    return (
        <>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.text}>{props.text}</p>
        <img className={classes.image}>{props.image}</img>

        </>
    );
};

export default FredProfilePage;
