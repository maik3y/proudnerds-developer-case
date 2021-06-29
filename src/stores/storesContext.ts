import * as React from 'react';
import GameController from "../controllers/gameController";
import RootStore from './rootStore';

let rootStore: RootStore;
export let RootStoreContext: React.Context<RootStore>;
export let gameControllerContext: React.Context<GameController>;
interface ContextValues {
  gameController: GameController;
}

function initContexts(v: ContextValues): void {
  gameControllerContext = React.createContext(v.gameController);
}

export function initGlobals(): void {
  rootStore = new RootStore();
  RootStoreContext = React.createContext(rootStore);
  initContexts(rootStore);
}

