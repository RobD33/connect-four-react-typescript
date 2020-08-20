import React from 'react';
import Cell from '../Cell/Cell'
import './Column.css'
import Player from '../../data/Player';

const Column = ({ columnState, makeMove }: Props) => {
    return (
        <div className="column">
            {populateColumn(columnState, makeMove)}
        </div>
    )
}

function populateColumn(columnState: (Player | null)[], makeMove: Function) {
    const column: JSX.Element[] = []
    for(let i = 0; i < columnState.length; i++) {
        column.push(<Cell
            key={ i }
            player={ columnState[i] }
            makeMove={ makeMove }
        />)
    }
    return column
}

interface Props {
    columnState: (Player | null)[];
    makeMove: Function;
}
export default Column

