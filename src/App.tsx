import { useState, type ReactElement } from "react";
import "./App.css";

const drum_pads = {
	"Heater 1": {
		"hotkey": "q",
		"audio": "",
	},
	"Heater 2": {
		"hotkey": "w",
		"audio": "",
	},
	"Heater 3": {
		"hotkey": "e",
		"audio": "",
	},
	"Heater 4": {
		"hotkey": "a",
		"audio": "",
	},
	"Clap": {
		"hotkey": "s",
		"audio": "",
	},
	"Open HH": {
		"hotkey": "d",
		"audio": "",
	},
	"Kick n' Hat": {
		"hotkey": "z",
		"audio": "",
	},
	"Kick": {
		"hotkey": "x",
		"audio": "",
	},
	"Closed HH": {
		"hotkey": "c",
		"audio": "",
	}
} as const;

type DrumPadLabel = keyof typeof drum_pads;
const drum_pad_labels = Object.keys(drum_pads) as DrumPadLabel[];

const to_kebab_case = (str: string): string => str.split(/\s|_|(?=[A-Z])/g).join("-").toLocaleLowerCase();

function App(): ReactElement {
	return (
		<>
			<div id="drum-machine">
				<h3 id="display">
					
				</h3>
				<div className="drum-pads">
					
				</div>
			</div>
		</>
	);
}

export default App;
