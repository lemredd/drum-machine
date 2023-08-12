import { useState, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PAD_LABELS, DRUM_PAD_HOTKEYS } from "./constants";

import to_title_case from "./helpers/to_title_case";

import DrumPad from "./DrumPad";

import "./App.css";

window.addEventListener("keydown", (event: KeyboardEvent) => {
	if (DRUM_PAD_HOTKEYS.indexOf(event.key.toLocaleLowerCase() as DrumPadHotkey) === -1) return;

	const audio = document.querySelector(`audio#${event.key.toUpperCase()}`) as HTMLAudioElement;
	const drum_pad = audio.parentElement as HTMLButtonElement;
	const display = document.querySelector("#display") as HTMLHeadingElement;

	audio.play().then((): void => {
		display.innerText = to_title_case(drum_pad.id).toLocaleUpperCase();
	}).catch(error => console.error(error));
});

function App(): ReactElement {
	const [audio_to_play, set_audio_to_play] = useState<DrumPadLabel | "">("");

	return (
		<div id="drum-machine">
			<h3 id="display">
				{audio_to_play.toLocaleUpperCase()}
			</h3>
			<div className="drum-pads">
				{DRUM_PAD_LABELS.map(label => (
					<DrumPad key={label} {...{ label, set_audio_to_play }} />
				))}
			</div>
		</div>
	);
}

export default App;
