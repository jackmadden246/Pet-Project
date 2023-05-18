import { Link } from "react-router-dom";

import classes from "../../styles/Rosy.module.css";

const PorshaDescription = props => {
    return (
        <>
        <Link to={"/RosyProfile"}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </>
    )
};

export default PorshaDescription;