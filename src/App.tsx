import { useState, type ReactElement } from "react";
import "./App.css";

const drum_pads = {
	"Heater 1": {},
	"Heater 2": {},
	"Heater 3": {},
	"Heater 4": {},
	"Clap": {},
	"Open-HH": {},
	"Kick-n'-Hat": {},
	"Kick": {},
	"Closed-HH": {}
};

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
