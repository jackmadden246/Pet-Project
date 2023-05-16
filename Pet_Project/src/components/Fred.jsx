import classes from '../styles/Fred.module.css';
import { useState } from 'react';
import Modal from './modal';

const FredDescription = (props) => {

    const [hover, setHover] = useState(false);

    function onHover() {
        setHover(true);
    }
  

    return (
        <>
    <h1 className={classes.title}>{props.title}</h1>
    {!hover && (
            <img 
            className={classes.image} 
            src={props.image} 
            onMouseEnter={onHover}
            onMouseLeave={!onHover}
            />
    )
            }
        
        {hover && ( <Modal 
        text = <p>Pick me!</p> 
        />
        )
        }
        </>
    );
}

export default FredDescription;
