import { Fragment } from 'react';

/* Import SocialLinks Icons */
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';



/* Import JSX Elements */
import SocialLinks from '../SocialLinks/SocialLinks';

import classes from './SocialListItems.module.css';

const SocialListItems = () => {
  return (
    <Fragment>
      <li className={classes.SocialListItems}>
        <SocialLinks href="https://www.linkedin.com/in/andrew-oyanguren/" icon={<SiLinkedin />} />
        <p className={classes.text}>Connect on LinkedIn to keep in contact.</p>
      </li>
      <li className={classes.SocialListItems}>
        <SocialLinks href="https://github.com/andrew-oyanguren" icon={<SiGithub />} />
        <p className={classes.text}>View many more of my coding repositories on Github.</p>
      </li>
      <li className={classes.SocialListItems}>
        <SocialLinks href="https://twitter.com/aaoyanguren" icon={<SiTwitter />} />
        <p className={classes.text}>Follow on Twitter to keep up with my progress as a developer.</p>
      </li>
    </Fragment>
  );
};

export default SocialListItems;