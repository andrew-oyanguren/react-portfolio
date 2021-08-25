import classes from './CustomHeading.module.css';

const CustomHeading = (props) => {
  const { tag, title } = props;

  const CustomTag = `h${tag}`;

  return (
    <CustomTag className={classes.CustomHeading}>
      {title}
    </CustomTag>
  );
};

export default CustomHeading;