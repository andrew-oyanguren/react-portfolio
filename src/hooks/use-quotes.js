import { useState, useEffect } from 'react';

/* Array of Quotes */

const QUOTE_DATA = [
  {
    title: 'Developer',
    quote: 'Creativity is a natural extension of our enthusiasm.',
    author: 'Earl Nightingale'
  },
  {
    title: 'Dreamer',
    quote: 'Life has no limitations, except the ones you make',
    author: 'Les Brown'
  },
  {
    title: 'Learner',
    quote: 'If knowledge is power, learning is your superpower.',
    author: 'Jim Kwik'
  },
];

const useQuotes = () => {

  /* State Variables */
  const [counter, setCounter] = useState(0);
  const [quoteData, setQuoteData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  /* UseEffect */
  useEffect(() => {

    /* Function: Gets quote with matching index to counter */
    const getQuoteData = () => {
      /* Start loading state */
      setIsLoading(true);

      /* Finds object (item) with index that matches current counter */
      const currentQuoteData = QUOTE_DATA.find((_, index) => index === counter );

      /* Stops at array length */
      if (counter > QUOTE_DATA.length) {
      return;
      }

      /* Sets quote (state) to matched Quote */
      setQuoteData(currentQuoteData);

      /* Start loading state */
      setIsLoading(false);
    };

    /* calls function at start */
    getQuoteData();

  }, [counter]);

  /* Incrementation / Decrementation Handler */

  const nextQuoteHandler = () => {
    if (counter === QUOTE_DATA.length) { /* (.length) Allows for future expansion of array */
      return;
    }
    setCounter((prevState) => prevState + 1); 
  };

  const prevQuoteHandler = () => {
    /* Prevents decrementing after 0 */
    if (counter === 0) { 
      return;
    }
    setCounter((prevState) => prevState - 1); /* Updates from prevstate to ensure current state */
  };

  return {
    counter,
    quoteData,
    isLoading,
    prevQuoteHandler,
    nextQuoteHandler,
  };

};

export default useQuotes;