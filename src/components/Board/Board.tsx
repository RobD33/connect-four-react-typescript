import React, { useCallback } from 'react';
import Column from '../Column/Column'
import './Board.css'
import Player from '../../data/Player';
import GameData from '../../data/GameData';
import CellData from '../../data/CellData';


const Board = ({ gameData }: Props) => {
    const [boardState, setBoardState] = React.useState(generateNewBoardState());

    const changeBoard = useCallback((selectedColumn,action)=> {
        setBoardState(calculateNewBoardState(selectedColumn, boardState, gameData.currentPlayer, action));
        if (action === 'move') gameData.changePlayer();
    }, [boardState, gameData]);

    return (
        <div className="board">
            { populateBoard(boardState, changeBoard, gameData.currentPlayer) }
        </div>
    );
};

const populateBoard = ( boardState: CellData[][], changeBoard: Function, currentPlayer : Player ) => {
    const board: JSX.Element[] = [];
    for(let i = 0; i < 7; i++){
        board.push(<Column 
            key={ i }
            columnState={ boardState[i] }
            changeBoard={ (action: String) => changeBoard(i, action) }
            currentPlayer={ currentPlayer }
        />);
    }
    return board;
}

const generateNewBoardState= () : CellData[][] => {
    const board: CellData[][] = [];
    for(let i = 0; i < 7; i++){
        let column: CellData[] = [];
        for(let j = 0; j < 6; j++){
            column.push(new CellData());
        }
        board.push(column);
    }
    return board;
}

const calculateNewBoardState = (selectedColumn: number, boardState: CellData[][], currentPlayer: Player, action : string) => {
    let lowestAvailableCell = findLowestAvailableCell(selectedColumn, boardState);
    lowestAvailableCell = correctForOutOfBounds(lowestAvailableCell, boardState[selectedColumn])
    switch (action) {
        case 'move':
            boardState[selectedColumn][lowestAvailableCell].player = currentPlayer;
            break;
        case 'highlight':
            boardState[selectedColumn][lowestAvailableCell].highlight = true;
            break;
        case 'removeHighlight':
            boardState[selectedColumn].forEach(cell => {
                cell.highlight = false;
            })
            break;
        default:
      }
    return [...boardState];
}

const findLowestAvailableCell = (selectedColumn: number, boardState: CellData[][] ) => {
   return boardState[selectedColumn].findIndex((cell: CellData) => cell.player !== null) - 1;
}

const correctForOutOfBounds = (lowestAvailableCell: number, columnState: CellData[]) => {
    return lowestAvailableCell < 0 ? columnState.length - 1 : lowestAvailableCell;
}

interface Props {
    gameData: GameData;
}
export default Board