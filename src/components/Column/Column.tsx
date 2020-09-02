import React from 'react';
import Cell from '../Cell/Cell'
import './Column.css'
import CellData from '../../data/CellData';
import Player from '../../data/Player';

const Column = ({ columnState, makeMove, currentPlayer }: Props) => {
    return (
        <div className="column">
            {populateColumn(columnState, checkForFullColumnWrapper(columnState, makeMove), currentPlayer)}
        </div>
    )
}

function populateColumn(columnState: CellData[], makeMove: Function, currentPlayer: Player) {
    const column: JSX.Element[] = []
    for(let i = 0; i < columnState.length; i++) {
        column.push(<Cell
            key={ i }
            cellData={ columnState[i] }
            makeMove={ makeMove }
            currentPlayer= { currentPlayer }
        />)
    }
    return column
}

const checkForFullColumnWrapper = (columnState  :CellData[], func: Function) :Function => {
    return columnState.some(cellData => cellData.player == null) ? func : fullColumnHandler;
}

const fullColumnHandler = () :void => {}

interface Props {
    columnState: CellData[];
    makeMove: Function;
    currentPlayer: Player;
}
export default Column

