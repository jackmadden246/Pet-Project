import {Link} from 'react-router-dom';
import classes from "../styles/Fred.module.css";

const FredDescription = props => {
  
    return (
        <>
        <Link to={"/FredProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
    
        </>
    );
}

export default FredDescription;
