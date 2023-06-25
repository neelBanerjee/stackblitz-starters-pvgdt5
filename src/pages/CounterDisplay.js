import React from 'react';
import { useCounterContext } from './CounterProvider';

const CounterDisplay = () => {
  const { state } = useCounterContext();

  return <p>Count: {state.count}</p>;
};

export default CounterDisplay;
