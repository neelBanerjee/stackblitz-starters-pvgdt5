import React from 'react';
import { useCounterContext } from './CounterProvider';
//import { handleCalculation } from './counterUtils';

const CounterButtons = () => {
  const { dispatch, handleCalculation } = useCounterContext();

  return (
    <div>
      <button onClick={() => handleCalculation(dispatch, 'INCREMENT')}>
        Increment
      </button>
      <button onClick={() => handleCalculation(dispatch, 'DECREMENT')}>
        Decrement
      </button>
    </div>
  );
};

export default CounterButtons;
