import { Fragment } from "react";
import classes from "../../styles/Rosy.module.css";
import { Link } from "react-router-dom";

const PorshaDescription = props => {
    return (
        <Fragment>
        <Link to={"/RosyProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </Fragment>
    )
};

export default PorshaDescription;