import { createContext } from "react";
import GameController from "../controllers/gameController";
import PlayerController from "../controllers/playerController";

const gameController = new GameController();
const playerController = new PlayerController();

export const GameControllerContext = createContext(gameController);
export const PlayerControllerContext = createContext(playerController);