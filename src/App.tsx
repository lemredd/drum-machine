import { useState, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_LABELS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";

import "./App.css";

const to_title_case = (str: string): string => str
	.split(/\s|_|-|(?=[A-Z])/g)
	.map((word): string => `${word[0].toLocaleUpperCase()}${word.substring(1)}`)
	.join(" ");

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

	function handle_click(event: React.MouseEvent<HTMLButtonElement>, label: DrumPadLabel): void {
		const target = event.target as HTMLButtonElement;
		const audio = target.firstChild as HTMLAudioElement;
		audio.play().then(() => set_audio_to_play(label)).catch(err => console.error(err));
	}

	return (
		<>
			<div id="drum-machine">
				<h3 id="display">
					{audio_to_play.toLocaleUpperCase()}
				</h3>
				<div className="drum-pads">
					{DRUM_PAD_LABELS.map(label => (
						<button
							key={label} className="drum-pad"
							id={to_kebab_case(label)}
							onClick={(event): void => handle_click(event, label)}
						>
							<audio
								id={DRUM_PADS[label].hotkey.toLocaleUpperCase()}
								className="clip"
								src={DRUM_PADS[label].audio}
							/>
							{DRUM_PADS[label].hotkey.toLocaleUpperCase()}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
