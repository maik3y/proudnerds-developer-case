import { createContext } from "react";
import GameController from "../controllers/gameController";
import PlayerController from "../controllers/playerController";

const playerController = new PlayerController();
const gameController = new GameController(playerController);

export const GameControllerContext = createContext(gameController);
export const PlayerControllerContext = createContext(playerController);