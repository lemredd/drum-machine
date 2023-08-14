import { DrumPadHotkey, DrumPadLabel } from "./types";

export const DRUM_PADS = {
	"Heater 1": {
		"hotkey": "Q",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
	},
	"Heater 2": {
		"hotkey": "W",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
	},
	"Heater 3": {
		"hotkey": "E",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
	},
	"Heater 4": {
		"hotkey": "A",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
	},
	"Clap": {
		"hotkey": "S",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
	},
	"Open HH": {
		"hotkey": "D",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
	},
	"Kick n' Hat": {
		"hotkey": "Z",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
	},
	"Kick": {
		"hotkey": "X",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
	},
	"Closed HH": {
		"hotkey": "C",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
	}
} as const;

export const DRUM_PAD_LABELS = Object.keys(DRUM_PADS) as DrumPadLabel[];
export const DRUM_PAD_HOTKEYS  = DRUM_PAD_LABELS.map(label => `Key${DRUM_PADS[label].hotkey}`) as DrumPadHotkey[];
