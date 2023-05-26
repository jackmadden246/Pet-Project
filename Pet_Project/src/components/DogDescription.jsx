import { Link} from "react-router-dom";
import classes from "../styles/DogDescription.module.css";

const DogDescription = props => {

    return (
      <div className={classes.div}> 
        <Link to={props.link}> 
        <img className={classes.image} src={props.image} />
        </Link>
        </div>
    );
}

export default DogDescription;
