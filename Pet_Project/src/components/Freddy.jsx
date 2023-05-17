import {Link} from 'react-router-dom';

import classes from "../styles/Freddy.module.css";

const FredDescription = props => {
  
    return (
        <>
        <Link to={"/FreddyProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
    
        </>
    );
}

export default FredDescription;
