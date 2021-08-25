/* Import Custom hook */
import useQuotes from '../../../hooks/use-quotes';

/* Import Loading Component */
import LoadingDots from '../../UI/LoadingDots/LoadingDots';

/* Import JSX Components */
import DisplaySwitcher from "./DisplaySwitcher/DisplaySwitcher";

import classes from './WelcomeDisplay.module.css';

const WelcomeDisplay = () => {

  /* useQuote Custom Hook Call */
  const { counter, quoteData, isLoading, prevQuoteHandler, nextQuoteHandler } = useQuotes();

  /* Deconstruct quoteData */
  const { quote, author } = quoteData;

  return (
    <div className={classes.WelcomeDisplay}>
      <DisplaySwitcher 
        counter={counter}
        quoteData={quoteData}
        onPrevQuote={prevQuoteHandler} 
        onNextQuote={nextQuoteHandler}
        isLoading={isLoading}
      />
      {isLoading ? <LoadingDots /> : (
        <div className={classes.quote}>
          <div className={classes.container}>
            <div className={classes.text}>
              <p>{quote}</p>
            </div>
            <div className={classes.author}>
              <strong>{`-${author}`}</strong>
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default WelcomeDisplay;