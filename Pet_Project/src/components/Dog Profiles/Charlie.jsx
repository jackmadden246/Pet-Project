import {Link} from 'react-router-dom';

import classes from "../../styles/Charlie.module.css";

const CharlieDescription = props => {
  
    return (
        <>
        <Link to={"/CharlieProfile"}><img className={classes.image} src={props.image} /> </Link>  
    
        </>
    );
}

export default CharlieDescription;
