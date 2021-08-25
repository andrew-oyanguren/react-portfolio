import { useContext } from 'react';

/* 
  Import "NavContext" for access to:
  1. state variable (navIsOpen) 
  2. provider handler (toggleNavHandler) 
*/
import NavContext from '../../../../../store/nav-context';

import classes from './Hamburger.module.css';

const Hamburger = () => {

  const navCtx = useContext(NavContext);
  
  const { navIsOpen, toggleNavHandler} = navCtx;

  /* Dynamic Classes: Initial class "Hamburger" and toggles "active"  */
  const hamburgerDynamicClasses = `${classes.Hamburger} ${navIsOpen ? classes.active : ''}`;

  return (
    <div className={hamburgerDynamicClasses} onClick={toggleNavHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;