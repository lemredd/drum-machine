import { useState, type ReactElement } from "react";
import "./App.css";

const drum_pads = {
	"heater-1": {},
	"heater-2": {},
	"heater-3": {},
	"heater-4": {},
	"clap": {},
	"open-hh": {},
	"kick-n'-hat": {},
	"kick": {},
	"closed-hh": {}
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
