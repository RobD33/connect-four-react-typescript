import React, { useCallback } from 'react';
import Column from '../Column/Column'
import './Board.css'


const Board = ({}: Props) => {

    const [boardState, setBoardState] = React.useState(generateNewBoardState())

    return (
        <div className="board">
            { populateBoard(boardState) }
        </div>
    )
}

const populateBoard = ( boardState: string[][] ) => {
    const board: JSX.Element[] = [];
    for(let i = 0; i < 7; i++){
        board.push(<Column 
            key={i}
            columnState={boardState[i]}/>);
    }
    return board;
}

const generateNewBoardState = () => {
    const board: string[][] = [];
    for(let i = 0; i < 7; i++){
        let column: string[] = [];
        for(let j = 0; j < 6; j++){
        column.push('white');
        }
        board.push(column);
    }
    return board;
}






interface Props {
}
export default Board