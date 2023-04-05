import { InitState, InitUI } from "./interfaces";
export declare const createUI: (state: InitState, app: any) => InitUI;
export declare const generateInitialState: (osProcess: NodeJS.Process) => InitState;
