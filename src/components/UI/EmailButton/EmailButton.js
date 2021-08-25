/* Import email Icon: FontAwesome Regular */
import { FaRegPaperPlane } from 'react-icons/fa';

import classes from './EmailButton.module.css';

const EmailButton = () => {
  return (
    <a href='mailto:aaoyanguren@outlook.com' className={classes.EmailButton}>
      <FaRegPaperPlane className={classes.icon}/>
    </a>
  );
};

export default EmailButton;

/*

NOTES:

1. Will use anchor until I create a email form modal.

*/