import React from 'react';
import './Cell.css';
import Player from '../../data/Player';

const Cell = ({ player, makeMove }: Props) => {
  return (
    <div className="cell" onClick={() => makeMove()}>
      <div className="left_border"/>
      <div className="window" style={{ backgroundColor: getColour(player) }}/>
      <div className="right_border"/>
    </div>
  );
}

const getColour = (player: (Player | null)) :string => {
    return player ? player.getColour() : 'white';
}
  
export default Cell;

interface Props {
  player: (Player | null);
  makeMove: Function;
}