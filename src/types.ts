import { drum_pads } from "./constants";

export type DrumPadLabel = keyof typeof drum_pads;
export type DrumPadHotkey = (typeof drum_pads)[DrumPadLabel]["hotkey"]
