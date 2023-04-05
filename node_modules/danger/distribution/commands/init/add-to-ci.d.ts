import { InitUI, InitState } from "./interfaces";
export declare const travis: (ui: InitUI, state: InitState) => Promise<void>;
export declare const circle: (ui: InitUI, state: InitState) => Promise<void>;
export declare const unsure: (ui: InitUI, _state: InitState) => Promise<void>;
