import { useEffect, useState, type ReactElement } from "react";

import type { DrumPadHotkey, DrumPadLabel } from "./types";

import { DRUM_PAD_HOTKEYS, DRUM_PAD_LABELS } from "./constants";

import DrumPad from "./DrumPad";

import "./App.css";

function App(): ReactElement {
	const [audio_to_play, set_audio_to_play] = useState<DrumPadLabel | "">("");
	const [hotkey_pressed, set_hotkey_pressed] = useState<DrumPadHotkey | "">("");

	useEffect(() => {
		function set_valid_hotkey(event: KeyboardEvent): void {
			const key = event.key.toLocaleLowerCase() as DrumPadHotkey;
			const is_valid_hotkey = DRUM_PAD_HOTKEYS.indexOf(key) !== -1;

			if (is_valid_hotkey) set_hotkey_pressed(key);
		}

		window.addEventListener("keydown", set_valid_hotkey);
		window.addEventListener("keyup", (event) => {
			const key = event.key.toLocaleLowerCase() as DrumPadHotkey;
			const is_valid_hotkey = DRUM_PAD_HOTKEYS.indexOf(key) !== -1;

			if (is_valid_hotkey) set_hotkey_pressed("");
		});

		return () => {
			window.removeEventListener("keydown", set_valid_hotkey);
		};
	});

	return (
		<div id="drum-machine">
			<h3 id="display">
				{audio_to_play.toLocaleUpperCase()}
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
