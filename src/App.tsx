import { useState, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PAD_LABELS } from "./constants";

import DrumPad from "./DrumPad";

import "./App.css";

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
