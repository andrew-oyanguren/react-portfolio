import classes from './WelcomePageWrapper.module.css';

const WelcomePageWrapper = (props) => {
  return (
    <div className={classes.WelcomePageWrapper}>
      {props.children}
    </div>
  );
};

export default WelcomePageWrapper;

/* ===== Component Info ===== */

/*
  1. Wraps around Welcome Page.
  2. Used for responsive Layout.
*/