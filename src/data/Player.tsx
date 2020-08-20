import PlayerParams from './PlayerParams';

export default class Player {
    private name: string;
    private playerNumber: number;
    private colour: string;
    private highlightColour: string;

  
    constructor({ name, playerNumber, colour, highlightColour }: PlayerParams) {
      this.name = name;
      this.playerNumber = playerNumber;
      this.colour = colour;
      this.highlightColour = highlightColour;
    }
  
    public getName() :string {
      return this.name;
    }

    getPLayerNumber() :number {
        return this.playerNumber;
    }

    public getColour() :string {
        return this.colour;
    }

    public getHighlightColour() :string {
        return this.highlightColour;
    }
  }