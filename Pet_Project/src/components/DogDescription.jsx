import classes from "../styles/DogDescription.module.css";
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

const DogDescription = props => {
    return (
        <Fragment>
        <Link to={props.link}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </Fragment>
    );
}

export default DogDescription;
