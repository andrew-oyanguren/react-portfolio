import { Fragment, useContext } from 'react';

/* 
  Import "NavContext" for access to:
  1. (navIsOpen) used for <nav> dynamic classes 
*/
import NavContext from '../../../../../store/nav-context';

import NavLinks from '../NavLinks/NavLinks';
import Hamburger from '../Hamburger/Hamburger';

import classes from './MobileNavigation.module.css';

const MobileNavigation = () => {

  const navCtx = useContext(NavContext);
  const { navIsOpen } = navCtx;

  const navClasses = `${classes.MobileNavigation} ${navIsOpen ? classes.open : ''}`;

  return (
    <Fragment>
      <Hamburger />
      <nav className={navClasses}>
        <ul>
          <NavLinks />
        </ul>
      </nav>
    </Fragment>
  );
};

export default MobileNavigation;

/*

NOTES: 

1. Pass closing function to navlinks.
2. pass closing function to logo?


*/