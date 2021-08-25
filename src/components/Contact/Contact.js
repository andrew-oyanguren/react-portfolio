/* Import JSX Components */
import GetInTouch from "./GetInTouch/GetInTouch";
import Socials from "./Socials/Socials";

import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.Contact}>
        <div className={classes['GetInTouch-wrapper']}>
          <GetInTouch />
        </div>
        <Socials />
    </div>
  );
};

export default Contact;