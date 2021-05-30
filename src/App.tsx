import React from 'react';
import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Usuario />
      <hr />
      <TimerPadre />

    </>
  );
}

export default App;
