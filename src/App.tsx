import React, { useState, useCallback } from 'react';
import './App.css';
import Board from './components/Board/Board'

function App() {

  const [state, setState] = useState({ currentPlayer: 1 })

  const changecurrentPlayer = useCallback(() => {
    let newState = state.currentPlayer === 1 ? { currentPlayer: 2 } : { currentPlayer: 1 }
    setState(newState)
  }, [state.currentPlayer])

  return (
    <div>
      <Board
        currentPlayer= {state.currentPlayer}
        changeCurrentPlayer={changecurrentPlayer}
      />
    </div>
  );
}


export default App;
