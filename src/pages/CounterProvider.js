import React from 'react';
import { handleCalculation } from './counterUtils';

const CounterContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export function CounterProvider({ children }) {
  const initialState = { count: 0 };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch, handleCalculation }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  const context = React.useContext(CounterContext);

  if (!context) {
    throw new Error(
      'useCounterContext should be used inside the CounterProvider.'
    );
  }

  return context;
}
