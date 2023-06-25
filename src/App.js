import React from 'react';
import { CounterProvider } from './pages/CounterProvider';
import CounterDisplay from './pages/CounterDisplay';
import CounterButtons from './pages/CounterButtons';

const App = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterButtons />
    </CounterProvider>
  );
};

export default App;
