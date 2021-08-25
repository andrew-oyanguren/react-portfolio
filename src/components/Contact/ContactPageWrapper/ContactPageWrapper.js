import classes from './ContactPageWrapper.module.css';

const ContactPageWrapper = (props) => {
  return (
    <div className={classes.ContactPageWrapper}>
      {props.children}
    </div>
  );
};

export default ContactPageWrapper;

/* ===== Component Info ===== */

/*
  1. Wraps around Contact Page.
  2. Used for responsive Layout.
*/