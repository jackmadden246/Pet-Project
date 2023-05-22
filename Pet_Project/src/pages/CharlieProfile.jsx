import { useState } from "react";
import CharlieImage from "../assets/Charlie-portrait.jpg";
import classes from "../styles/CharlieProfile.module.css";
import { MDBRipple } from 'mdb-react-ui-kit';

const CharlieProfilePage = () => {
    const [ishovering, setIsHovering] = useState(false);

    function onHover () {
        setIsHovering(true);
    }

    function notHovering () {
        setIsHovering(false);
    }

    return (
        <>
        <div className={classes.div}> 
        <h1 className={classes.title}>Charlie Chin: the funny, furry and fantastic puppy</h1>
        <p className={classes.text}>
            Say hello to Charlie. He enjoys affection, cuddling and everything else. 
            Pick Charlie if you want a dog for life. Beware! His cute eyes can seduce even the most cold-hearted.
            </p>
            </div>
            <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
        <img className='w-100' 
            src={CharlieImage} 
            onMouseEnter={onHover} 
            onMouseLeave={notHovering} />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            {ishovering && <p className='text-white mb-0'>Pick Charlie!</p>}
            </div>
            </div>
        <div className='hover-overlay'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
        </div>
        </MDBRipple>
        </>
       
    );
};

export default CharlieProfilePage;

{/* <>
<Navbar />
<div className={classes.div}> 
<h1 className={classes.title}>Charlie Chin: the funny, furry and fantastic puppy</h1>
<p className={classes.text}>
    Say hello to Charlie. He enjoys affection, cuddling and everything else. 
    Pick Charlie if you want a dog for life. Beware! His cute eyes can seduce even the most cold-hearted.
    </p>
<img className={classes.image} src={CharlieImage} onMouseEnter={onHover} onMouseLeave={notHovering} />
    {ishovering && <p className={classes.overlaytext}>Pick Charlie!</p>}
    </div>
</> */}