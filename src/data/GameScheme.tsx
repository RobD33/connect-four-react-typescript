export default class GameScheme {
    private backgroundColor: string;

    constructor(backgroundColor: string) {
        this.backgroundColor = backgroundColor;
    }

    getBackgroundColor() :string {
        return this.backgroundColor
    }
}