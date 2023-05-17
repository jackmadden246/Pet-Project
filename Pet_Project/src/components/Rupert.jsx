import { Link } from "react-router-dom";

import classes from "../styles/Rosy.module.css";

const RupertDescription = props => {
    return (
        <>
        <Link to={"/RupertProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </>
    )
};

export default RupertDescription;