import classes from '../styles/Fred.module.css';


const FredDescription = props => {
  
    return (
        <>
    <h1 className={classes.title}>{props.title}</h1>
    <img className={classes.image} src={props.image}  />
        </>
    );
}

export default FredDescription;
