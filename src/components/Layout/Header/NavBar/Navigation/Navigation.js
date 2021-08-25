/* Import Custom Hook */
import useBreakpoint from '../../../../../hooks/use-breakpoint';

import NavLinks from '../NavLinks/NavLinks';
import EmailButton from '../../../../UI/EmailButton/EmailButton';

import classes from './Navigation.module.css';

/* Navigation breakpoint passed to custom hook */
const breakpoint = 992;

const Navigation = () => {

  const {customBreakpoint: emailButtonBreakpoint} = useBreakpoint(breakpoint);

  return (
    <nav className={classes.Navigation}>
      <ul>
        <NavLinks />
      </ul>
      {emailButtonBreakpoint && <EmailButton />}
    </nav>
  );
};

export default Navigation;