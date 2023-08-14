import { useEffect, useState, type ReactElement } from "react";

import type { DrumPadHotkey, DrumPadLabel } from "./types";

import { DRUM_PAD_LABELS } from "./constants";

import DrumPad from "./DrumPad";

import "./App.css";

function App(): ReactElement {
	const [audio_to_play, set_audio_to_play] = useState<DrumPadLabel | "">("");
	const [hotkey_pressed, set_hotkey_pressed] = useState<DrumPadHotkey | "">("");

	useEffect(() => {
		function set_valid_hotkey(event: KeyboardEvent, unset = false): void {
			const key = event.code as DrumPadHotkey;

			set_hotkey_pressed(unset ? "" : key);
		}

		document.addEventListener("keydown", (event) => set_valid_hotkey(event), { "once": true });
		document.addEventListener("keyup", (event) => set_valid_hotkey(event, true), { "once": true });

		return () => {
			document.removeEventListener("keydown", (event) => set_valid_hotkey(event));
			document.removeEventListener("keyup", (event) => set_valid_hotkey(event, true));
		};
	});

	return (
		<div id="drum-machine">
			<h3 id="display">
				{audio_to_play}
			</h3>
			<div className="drum-pads">
				{DRUM_PAD_LABELS.map(label => (
					<DrumPad
						key={label}
						{...{ label, hotkey_pressed, set_audio_to_play }}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
