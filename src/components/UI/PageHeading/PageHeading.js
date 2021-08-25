import classes from './PageHeading.module.css';

const PageHeading = (props) => {
  return (
    <h1 className={classes.PageHeading}>
      {props.title}
    </h1>
  );
};

export default PageHeading;