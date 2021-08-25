import { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';

/* Import "NavContext" for access to:
  1. (closeNavHandler) used to set navIsOpen to (false) closing navbar.
*/
import NavContext from '../../../../../store/nav-context';

import classes from './NavLinks.module.css';

const NavLinks = () => {

  const navCtx = useContext(NavContext);
  
  const { closeNavHandler } = navCtx;

  return (
    <Fragment>
      <li>
        <NavLink 
          className={classes.NavLink}
          activeClassName={classes.active}
          to='/welcome'
          onClick={closeNavHandler}
        >
          <span>1.</span> Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          className={classes.NavLink}
          activeClassName={classes.active}
          to='/about'
          onClick={closeNavHandler}
        >
          <span>2.</span> About
        </NavLink>
      </li>
      <li>
        <NavLink 
          className={classes.NavLink}
          activeClassName={classes.active} 
          to='/portfolio'
          onClick={closeNavHandler}
        >
          <span>3.</span> Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink 
          className={classes.NavLink}
          activeClassName={classes.active} 
          to='/contact'
          onClick={closeNavHandler}
        >
          <span>4.</span> Contact
        </NavLink>
      </li>
    </Fragment>
  );
};

export default NavLinks;