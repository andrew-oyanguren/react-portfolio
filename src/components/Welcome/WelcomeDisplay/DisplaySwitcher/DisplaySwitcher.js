/* Switcher Button Icons */
import { VscChevronLeft } from 'react-icons/vsc'
import { VscChevronRight } from 'react-icons/vsc'

/* Import Loading Component */
import LoadingDots from '../../../UI/LoadingDots/LoadingDots';

import classes from './DisplaySwitcher.module.css';

const DisplaySwitcher = (props) => {

  const { counter, quoteData, isLoading, onPrevQuote, onNextQuote } = props;

  /* Deconstruct quoteData */
  const { title } = quoteData;

  /* Disable Button Helper Constants */
  const prevBtnDisabled = (counter === 0);
  const NextBtnDisabled = (counter === 2);

  return (
    <div className={classes.DisplaySwitcher}>
        <button 
          className="previousBtn" 
          onClick={onPrevQuote} 
          disabled={prevBtnDisabled}
        >
          {<VscChevronLeft />}
        </button>
        <div className={classes.title}>
          {isLoading ? <LoadingDots /> : (
            <h3>{title}</h3>
          )}
        </div>
        <button 
          className="nextBtn" 
          onClick={onNextQuote}
          disabled={NextBtnDisabled}
        >
          {<VscChevronRight />}
        </button>
    </div>
  );
};

export default DisplaySwitcher;

/*

NOTES: 

1. Create forward and back button. (component?)
2. Display new text from reducer.
3. Recieve title from props.

*/