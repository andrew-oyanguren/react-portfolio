/* Import Images */
import eloquoentJs from '../../../assets/img/eloquent-js.jpeg';
import limitless from '../../../assets/img/limitless.png';
import atomicHabits from '../../../assets/img/atomic-habits.jpeg';
import cantHurtMe from '../../../assets/img/cant-hurt-me.jpeg';


/* Import JSX Elements */
import Book from './Book/Book';

import classes from './RecentBooks.module.css';

const BOOKS = [
  {
    id: '01',
    title: 'Reading',
    coverImg: eloquoentJs,
  },
  {
    id: '02',
    title: 'Finished',
    coverImg: atomicHabits,
  },
  {
    id: '03',
    title: 'Finished',
    coverImg: limitless,
  },
  {
    id: '04',
    title: 'Finished',
    coverImg: cantHurtMe,
  }
];

const RecentBooks = () => {
  return (
    <div className={classes.RecentBooks}>
      <div className={classes.heading}>
        <h3> -Recent Books</h3>
      </div>
      <div className={classes.container}>
        {BOOKS.map((book) => (
          <Book 
            key={book.id} 
            title={book.title} 
            image={book.coverImg}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;