import { DrumPadLabel } from "./types";

export const DRUM_PADS = {
	"Heater 1": {
		"hotkey": "q",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
	},
	"Heater 2": {
		"hotkey": "w",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
	},
	"Heater 3": {
		"hotkey": "e",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
	},
	"Heater 4": {
		"hotkey": "a",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
	},
	"Clap": {
		"hotkey": "s",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
	},
	"Open HH": {
		"hotkey": "d",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
	},
	"Kick n' Hat": {
		"hotkey": "z",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
	},
	"Kick": {
		"hotkey": "x",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
	},
	"Closed HH": {
		"hotkey": "c",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
	}
} as const;

export const DRUM_PAD_LABELS = Object.keys(DRUM_PADS) as DrumPadLabel[];
export const DRUM_PAD_HOTKEYS = DRUM_PAD_LABELS.map(label => DRUM_PADS[label].hotkey);
