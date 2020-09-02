import React from 'react';
import './Cell.css';
import CellData from '../../data/CellData';
import Player from '../../data/Player';

const Cell = ({ cellData, makeMove, currentPlayer }: Props) => {
  return (
    <div className="cell" onClick={() => makeMove()}>
      <div className="left_border"/>
      <div className="window" style={{ backgroundColor: getColour(cellData, currentPlayer) }}/>
      <div className="right_border"/>
    </div>
  );
}

const getColour = (cellData: CellData, currentPlayer: Player) :string => {
    if (cellData.player) return cellData.player.getColour()
    else return cellData.highlight ? currentPlayer.getHighlightColour() : 'white';
}
  
export default Cell;

interface Props {
  cellData: CellData;
  makeMove: Function;
  currentPlayer: Player;
}