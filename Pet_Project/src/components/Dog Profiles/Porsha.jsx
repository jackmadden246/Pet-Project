import classes from "../../styles/Porsha.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const PorshaDescription = props => {
    return (
        <Fragment>
        <Link to={"/PorshaProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </Fragment>
    )
};

export default PorshaDescription;