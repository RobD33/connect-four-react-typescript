import React from 'react';
import Cell from '../Cell/Cell'
import './Column.css'

const Column = ({ columnState, makeMove }: Props) => {
    return (
        <div className="column">
            {populateColumn(columnState, makeMove)}
        </div>
    )
}

function populateColumn(columnState: number[], makeMove: Function) {
    const column: JSX.Element[] = []
    for(let i = 0; i < columnState.length; i++) {
        column.push(<Cell
            key={ i }
            cellState={ columnState[i] }
            makeMove={ makeMove }
        />)
    }
    return column
}

interface Props {
    columnState: number[];
    makeMove: Function;
}
export default Column

