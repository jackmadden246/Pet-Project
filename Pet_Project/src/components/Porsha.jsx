import { Link } from "react-router-dom";

import classes from "../styles/Porsha.module.css";

const PorshaDescription = props => {
    return (
        <>
        <Link to={"/PorshaProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </>
    )
};

export default PorshaDescription;