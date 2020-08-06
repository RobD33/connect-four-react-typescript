import React from 'react';
import Cell from '../Cell/Cell'
import './Column.css'

const Column = ({ columnState }: Props) => {
    return (
        <div className="column">
            {populateColumn(columnState)}
        </div>
    )
        
}

function populateColumn(columnState: string[]) {
    const column: JSX.Element[] = []
    for(let i = 0; i < columnState.length; i++) {
        column.push(<Cell key={i} cellColor={columnState[i]}/>)
    }
    return column
}

interface Props {
    columnState: string[];
}
export default Column

