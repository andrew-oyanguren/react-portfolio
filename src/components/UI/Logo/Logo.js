import { useContext } from 'react';
import { Link } from 'react-router-dom';

/* Import Icons for Brand */
import {IoTriangleOutline} from 'react-icons/io5';
import {IoEllipseOutline} from 'react-icons/io5';


/* Import NavContext  */
import NavContext from '../../../store/nav-context';

import classes from './Logo.module.css';

const Logo = () => {

  const navCtx = useContext(NavContext);

  const { closeNavHandler } = navCtx;

  return (
    <div className={classes.Logo} onClick={closeNavHandler}>
      <Link className={`flex-center ${classes.link}`} to="/welcome">
        <IoTriangleOutline /><IoEllipseOutline />
      </Link>
      <div className={classes.brand}><span>Andrew</span> Oyanguren</div>
    </div>
  );
};

export default Logo;

/* <Link> className: 'flex-center' is a global class */