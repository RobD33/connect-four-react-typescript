import React from 'react';
import './Cell.css';

const Cell = ({ cellColor }: Props) => {
  return (
    <div className="cell">
      <div className="left_border"/>
      <div className="window" style={{ backgroundColor: cellColor }}/>
      <div className="right_border"/>
    </div>
  );
}
  
export default Cell;

interface Props {
  cellColor: string;
}