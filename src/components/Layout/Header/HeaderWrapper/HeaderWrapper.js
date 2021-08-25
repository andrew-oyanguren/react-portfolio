import classes from './HeaderWrapper.module.css';

const HeaderWrapper = (props) => {
  return (
    <div className={classes.HeaderWrapper}>
      {props.children}
    </div>
  );
};

export default HeaderWrapper;