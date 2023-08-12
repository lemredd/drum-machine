import { DRUM_PADS } from "./constants";

export type DrumPadLabel = keyof typeof DRUM_PADS;
export type DrumPadHotkey = (typeof DRUM_PADS)[DrumPadLabel]["hotkey"]
