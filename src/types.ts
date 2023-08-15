import { DRUM_PADS } from "./constants";

export type DrumPadLabel = keyof typeof DRUM_PADS;
export type DrumPadHotkey = `Key${(typeof DRUM_PADS)[DrumPadLabel]["hotkey"]}`
