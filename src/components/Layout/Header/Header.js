import { useState } from 'react';

/* Import NavContext to use as provider */
import NavContext from '../../../store/nav-context';

/* Import JSX Components */
import HeaderWrapper from './HeaderWrapper/HeaderWrapper';
import Logo from '../../UI/Logo/Logo';
import NavBar from './NavBar/NavBar';

import classes from './Header.module.css';

const Header = () => {

  /* State Variables */

  /* "navIsOpen" shared with context state variable */
  const [navIsOpen, setNavIsOpen] = useState(false);

  /* Nav Handlers: Both are passed through Context.Provider */
  const toggleNavHandler = () => {
    setNavIsOpen((prevState) => !prevState);
  };

  const closeNavHandler = () => {
    setNavIsOpen(false);
  }

  /* Context.Provider Initial Value */
  const providerValue = {
    navIsOpen: navIsOpen,
    toggleNavHandler,
    closeNavHandler
  };

  return (
    <header className={classes.Header}>
      <HeaderWrapper>
        <NavContext.Provider value={providerValue}>
          <Logo />
          <NavBar />
        </NavContext.Provider>
      </HeaderWrapper>
    </header>
  );
};

export default Header;