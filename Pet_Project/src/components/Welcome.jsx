import {welcomeText} from '../components/BackendData';
import classes from "../styles/Welcome.module.css";

const WelcomeMessage = () => {
        const welcomeTextData = welcomeText;
        const [title, text, details] = Object.values(welcomeTextData);
    
return (
    <>
        <h1 className={classes.title}>{title}</h1> 
        <p className={classes.text}> {text}</p> 
        <p className={classes.text}>{details}</p>
    </>
)
};

export default WelcomeMessage;
