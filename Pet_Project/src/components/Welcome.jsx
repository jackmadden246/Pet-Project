import classes from "../styles/Welcome.module.css";

const WelcomeMessage = props => {

return ( 
    <> 
    <h1 className={classes.title}>{props.title} </h1> 
    <p className={classes.text}>{props.text}</p>
    <p className={classes.text}>{props.details}</p>
    </>
);
};

export default WelcomeMessage;
