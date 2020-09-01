import React, { useCallback } from 'react';
import Column from '../Column/Column'
import './Board.css'
import Player from '../../data/Player';
import GameData from '../../data/GameData';


const Board = ({ gameData }: Props) => {
    const [boardState, setBoardState] = React.useState(generateNewBoardState());

    const makeMove = useCallback((selectedColumn)=> {
        setBoardState(calculateNewBoardState(selectedColumn, boardState, gameData.currentPlayer));
        gameData.changePlayer();
    }, [boardState, gameData]);

    return (
        <div className="board">
            { populateBoard(boardState, makeMove) }
        </div>
    );
};

const populateBoard = ( boardState: (Player | null)[][], makeMove: Function ) => {
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

const generateNewBoardState= () : (Player | null)[][] => {
    const board: null[][] = [];
    for(let i = 0; i < 7; i++){
        let column: null[] = [];
        for(let j = 0; j < 6; j++){
        column.push(null);
        }
        board.push(column);
    }
    return board;
}

const calculateNewBoardState = (selectedColumn: number, boardState: (Player | null)[][], currentPlayer: Player) => {
    let lowestAvailableCell = findLowestAvailableCell(selectedColumn, boardState);
    lowestAvailableCell = correctForOutOfBounds(lowestAvailableCell, boardState[selectedColumn])
    boardState[selectedColumn][lowestAvailableCell] = currentPlayer;
    return [...boardState];
}

const findLowestAvailableCell = (selectedColumn: number, boardState: (Player | null)[][] ) => {
   return boardState[selectedColumn].findIndex((cell: Player | null) => cell !== null) - 1;
}

const correctForOutOfBounds = (lowestAvailableCell: number, columnState: (Player | null)[]) => {
    return lowestAvailableCell < 0 ? columnState.length - 1 : lowestAvailableCell;
}

interface Props {
    gameData: GameData;
}
export default Board