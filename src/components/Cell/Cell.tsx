import React from 'react';
import './Cell.css';
import CellData from '../../data/CellData';
import Player from '../../data/Player';

const Cell = ({ cellData, changeBoard, currentPlayer }: Props) => {
  return (
    <div className="cell"
        onClick={() => changeBoard('move')}
        onMouseEnter={()=>changeBoard('highlight')}
        onMouseLeave={() => changeBoard('removeHighlight')}
    >
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
  changeBoard: Function;
  currentPlayer: Player;
}