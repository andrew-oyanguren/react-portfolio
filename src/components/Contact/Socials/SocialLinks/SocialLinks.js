import classes from './SocialLinks.module.css';

const SocialLinks = (props) => {

  const { href, icon } = props;

  return (
    <a 
      className={classes.SocialLinks}
      href={href}
      target="_blank" 
      rel="noopener noreferrer" /* Provides security when opening a new tab */
    >
      {icon}
    </a>
  );
};

export default SocialLinks;