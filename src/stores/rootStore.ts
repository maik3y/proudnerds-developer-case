import GameController from "../controllers/gameController";

export default class RootStore {
    public readonly gameController: GameController;
    public constructor() {
        this.gameController = new GameController();
    }
}