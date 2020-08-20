import Player from './Player';
import GameScheme from './GameScheme';

export default interface GameDataParams {
    playerOne: Player;
    playerTwo: Player;
    scheme: GameScheme;
}