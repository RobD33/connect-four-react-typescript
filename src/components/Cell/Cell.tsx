import React from 'react';
import './Cell.css';

const Cell = ({ cellState, makeMove }: Props) => {
  return (
    <div className="cell" onClick={() => makeMove()}>
      <div className="left_border"/>
      <div className="window" style={{ backgroundColor: getColour(cellState) }}/>
      <div className="right_border"/>
    </div>
  );
}

const getColour = (cellState: number) => {
    switch(cellState) {
        case 1:
            return 'red'
        case 2:
            return 'yellow'
        default:
            return 'white'
    }
}
  
export default Cell;

interface Props {
  cellState: number;
  makeMove: Function;
}