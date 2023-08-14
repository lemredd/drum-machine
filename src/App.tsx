import { useEffect, useState, type ReactElement } from "react";

import type { DrumPadHotkey, DrumPadLabel } from "./types";

import { DRUM_PAD_HOTKEYS, DRUM_PAD_LABELS } from "./constants";

import DrumPad from "./DrumPad";

import "./App.css";

function App(): ReactElement {
	const [audio_to_play, set_audio_to_play] = useState<DrumPadLabel | "">("");
	const [hotkey_pressed, set_hotkey_pressed] = useState<DrumPadHotkey | "">("");

	useEffect(() => {
		window.addEventListener("keydown", (event: KeyboardEvent) => {
			const key = event.key as DrumPadHotkey;
			const is_valid_hotkey = DRUM_PAD_HOTKEYS.indexOf(key) !== -1;

			if (is_valid_hotkey) set_hotkey_pressed(key);
		});
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
