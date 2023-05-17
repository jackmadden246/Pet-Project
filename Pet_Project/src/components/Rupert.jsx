import classes from "../styles/Rosy.module.css";

const RupertDescription = props => {
    return (
        <>
        <h1 className={classes.title}>{props.title}</h1>
        <img className={classes.image} src={props.image}  />
        </>
    )
};

export default RupertDescription;