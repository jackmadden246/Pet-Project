import classes from '../styles/Modal.module.css';

const Modal = (props) => {
return (
        <>
        <div className={classes.overlay}> 
           <p className={classes.text}>{props.text}</p>
           </div>
        </>
);
}

export default Modal;