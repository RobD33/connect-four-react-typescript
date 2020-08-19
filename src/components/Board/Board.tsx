import React, { useCallback } from 'react';
import Column from '../Column/Column'
import './Board.css'


const Board = ({ currentPlayer, changeCurrentPlayer }: Props) => {

    const [boardState, setBoardState] = React.useState(generateNewBoardState());

    const makeMove = useCallback((selectedColumn)=> {
        setBoardState(calculateNewBoardState(selectedColumn, boardState, currentPlayer));
        changeCurrentPlayer();
    }, [boardState, currentPlayer, changeCurrentPlayer]);

    return (
        <div className="board">
            { populateBoard(boardState, makeMove) }
        </div>
    );
};

const populateBoard = ( boardState: number[][], makeMove: Function ) => {
    const board: JSX.Element[] = [];
    for(let i = 0; i < 7; i++){
        board.push(<Column 
            key={i}
            columnState={boardState[i]}
            makeMove={() => makeMove(i)}
        />);
    }
    return board;
}

const generateNewBoardState = () => {
    const board: number[][] = [];
    for(let i = 0; i < 7; i++){
        let column: number[] = [];
        for(let j = 0; j < 6; j++){
        column.push(0);
        }
        board.push(column);
    }
    return board;
}

const calculateNewBoardState = (selectedColumn: number, boardState: number[][], currentPlayer: number) => {
    let lowestAvailableCell = findLowestAvailableCell(selectedColumn, boardState);
    lowestAvailableCell = correctForOutOfBounds(lowestAvailableCell, boardState[selectedColumn])
    boardState[selectedColumn][lowestAvailableCell] = currentPlayer;
    return boardState;
}

const findLowestAvailableCell = (selectedColumn: number, boardState: number[][] ) => {
   return boardState[selectedColumn].findIndex((cell: number) => cell !== 0) - 1;
}

const correctForOutOfBounds = (lowestAvailableCell: number, columnState: number[]) => {
    return lowestAvailableCell < 0 ? columnState.length -1 : lowestAvailableCell;
}

interface Props {
    currentPlayer: number;
    changeCurrentPlayer: Function;
}
export default Board