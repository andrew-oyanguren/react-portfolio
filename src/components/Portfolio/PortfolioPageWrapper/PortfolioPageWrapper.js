import classes from './PortfolioPageWrapper.module.css';

const PortfolioPageWrapper = (props) => {
  return (
    <div className={classes.PortfolioPageWrapper}>
      {props.children}
    </div>
  );
};

export default PortfolioPageWrapper;

/* ===== Component Info ===== */

/*
  1. Wraps around pages.
  2. Used for responsive Layout.
*/