import { Link} from "react-router-dom";
import classes from "../../styles/Navbar.module.css";

const Navbar = () => {

    return (
        <> 
        <div className={classes.navbar}>
            <button className={classes.button}> <Link to={"/"}> Home</Link> </button>
        </div>
        </>
    );
};

export default Navbar;