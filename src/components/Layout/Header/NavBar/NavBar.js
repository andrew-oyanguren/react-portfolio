import { Fragment } from 'react';

/* Import Custom Hook */
import useBreakpoint from '../../../../hooks/use-breakpoint';

/* Import Navigations: (desktop), (mobile) */
import Navigation from './Navigation/Navigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';

/* Navbar breakpoint passed to custom hook */
const breakpoint = 936;

const NavBar = () => {

  const { customBreakpoint: navBarBreakpoint } = useBreakpoint(breakpoint);

  return (
    <Fragment>
      {navBarBreakpoint && <Navigation />}
      {!navBarBreakpoint && <MobileNavigation />}
    </Fragment>
  );
};

export default NavBar;