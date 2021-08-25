import classes from './AboutPageWrapper.module.css';

const AboutPageWrapper = (props) => {
  return (
    <div className={classes.AboutPageWrapper}>
      {props.children}
    </div>
  );
};

export default AboutPageWrapper;

/* ===== Component Info ===== */

/*
  1. Wraps around About page.
  2. Used for responsive Layout.
*/