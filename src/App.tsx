import React, { useState, useCallback } from 'react';
import './App.css';
import Board from './components/Board/Board'

function App() {

  const [state, setState] = useState({ player: 1 })

  const changePlayer = useCallback(() => {
    let newState = state.player === 1 ? { player: 2 } : { player: 1 }
    setState(newState)
  }, [state])
  
  return (
    <div>
      <Board />
    </div>
  );
}


export default App;
