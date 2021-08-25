import classes from './PageWrapper.module.css';

const PageWrapper = (props) => {
  return (
    <div className={classes.PageWrapper}>
      {props.children}
    </div>
  );
};

export default PageWrapper;

/* ===== Component Info ===== */

/*
  1. Wraps around pages.
  2. Used for responsive Layout.
*/