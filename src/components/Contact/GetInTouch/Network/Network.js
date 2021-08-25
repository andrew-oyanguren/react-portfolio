import EmailButton from '../../../UI/EmailButton/EmailButton';

import classes from './Network.module.css';

const Network = () => {
  return (
    <div className={classes.Network}>
      <div className={classes.email}>
        <p className={classes.address}>aaoyanguren@outlook.com</p>
        <EmailButton />
      </div>
      <div className={classes.call}>
        <div className={classes.wrapper}>
          <a href='tel:15033120574'>(503) 312-0574</a>
        </div>
        <p className={classes.text}><span>Available everyday</span> 9am - 5pm PT</p>
      </div>
    </div>
  );
};

export default Network;