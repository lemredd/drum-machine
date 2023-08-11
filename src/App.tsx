import { useState, type ReactElement } from "react";
import "./App.css";

const drum_pads = {
	"Heater 1": {
		"key": "q",
		"audio": "",
	},
	"Heater 2": {
		"key": "w",
		"audio": "",
	},
	"Heater 3": {
		"key": "e",
		"audio": "",
	},
	"Heater 4": {
		"key": "a",
		"audio": "",
	},
	"Clap": {
		"key": "s",
		"audio": "",
	},
	"Open HH": {
		"key": "d",
		"audio": "",
	},
	"Kick n' Hat": {
		"key": "z",
		"audio": "",
	},
	"Kick": {
		"key": "x",
		"audio": "",
	},
	"Closed HH": {
		"key": "c",
		"audio": "",
	}
} as const;

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
