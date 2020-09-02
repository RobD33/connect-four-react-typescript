import Player from './Player';

export default class CellData {
   public player : Player | null;
   public highlight : boolean;

   constructor() {
       this.player = null;
       this.highlight = false;
   }
}