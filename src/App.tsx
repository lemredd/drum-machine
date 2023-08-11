import { useState, type ReactElement } from "react";
import "./App.css";

const drum_pads = {
	"heater-1": {
		"key": "q",
		"audio": "",
	},
	"heater-2": {
		"key": "w",
		"audio": "",
	},
	"heater-3": {
		"key": "e",
		"audio": "",
	},
	"heater-4": {
		"key": "a",
		"audio": "",
	},
	"clap": {
		"key": "s",
		"audio": "",
	},
	"open-hh": {
		"key": "d",
		"audio": "",
	},
	"kick-n'-hat": {
		"key": "z",
		"audio": "",
	},
	"kick": {
		"key": "x",
		"audio": "",
	},
	"closed-hh": {
		"key": "c",
		"audio": "",
	}
};
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
