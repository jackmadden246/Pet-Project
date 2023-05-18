import classes from "../../styles/Charlie.module.css";
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

const CharlieDescription = props => {
    return (
        <Fragment>
        <Link to={"/CharlieProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </Fragment>
    );
}

export default CharlieDescription;
