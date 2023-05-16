import classes from '../styles/Modal.module.css';

const Modal = props => {
return (
        <div className={classes.overlay}> 
        <p className={classes.text}>Pick me!</p>
        </div>
);
}

export default Modal;