import classes from './Book.module.css';

const Book = ({title, image}) => {

  /*const bookStyle = `background-color: url(${image})`;*/

  return (
    <div className={classes.Book} style={{backgroundImage: `url(${image})`}}>
      <div className={classes.description}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Book;