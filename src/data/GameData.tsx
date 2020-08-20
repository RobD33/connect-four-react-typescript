import Player from './Player';
import GameScheme from './GameScheme';
import GameDataParams from './GameDataParams';

export default class GameData {
    private playerOne: Player;
    private playerTwo: Player;
    private scheme: GameScheme;
    public currentPlayer: Player;

    constructor( { playerOne, playerTwo, scheme } :GameDataParams) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.scheme = scheme;
        this.currentPlayer = playerOne;
    }

    public getPlayerOne() :Player {
        return this.playerOne;
    }

    public getPlayerTwo() :Player {
        return this.playerTwo;
    }

    public getScheme() :GameScheme {
        return this.scheme;
    }

    public changePlayer() :void {
        this.currentPlayer = this.currentPlayer === this.playerOne ?
            this.playerTwo :
                this.playerOne;
    }
}