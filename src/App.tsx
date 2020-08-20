import React, { useState, useCallback } from 'react';
import './App.css';
import Board from './components/Board/Board'
import Player from './data/Player';
import PlayerParams from './data/PlayerParams';
import GameScheme from './data/GameScheme';
import GameData from './data/GameData';
import GameDataParams from './data/GameDataParams';

function App() {
  const gameData = createNewGameData();

  return (
    <div>
      <Board
        gameData={gameData}
      />
    </div>
  );
}

const createNewGameData = () => {
  const playerOneParams: PlayerParams = {
    name: 'Bob',
    playerNumber: 1,
    colour: 'red',
    highlightColour: '#ff9090',
  }

  const playerTwoParams: PlayerParams = {
    name: 'Clive',
    playerNumber: 2,
    colour: 'yellow',
    highlightColour: '#ffffbd'
  }

  const playerOne: Player = new Player(playerOneParams);
  const playerTwo: Player = new Player(playerTwoParams);
  const scheme: GameScheme = new GameScheme('white');

  const gameDataParams: GameDataParams = {
    playerOne,
    playerTwo,
    scheme
  }

  return new GameData(gameDataParams);
}


export default App;
