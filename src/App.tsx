import { useState, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { drum_pads } from "./constants";

import "./App.css";

const drum_pad_labels = Object.keys(drum_pads) as DrumPadLabel[];
const drum_pad_hotkeys = drum_pad_labels.map(label => drum_pads[label].hotkey);

const to_kebab_case = (str: string): string => str.split(/\s|_/g).join("-").toLocaleLowerCase();
const to_title_case = (str: string): string => str
	.split(/\s|_|-|(?=[A-Z])/g)
	.map((word): string => `${word[0].toLocaleUpperCase()}${word.substring(1)}`)
	.join(" ");

window.addEventListener("keydown", (event: KeyboardEvent) => {
	if (drum_pad_hotkeys.indexOf(event.key.toLocaleLowerCase() as DrumPadHotkey) === -1) return;

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
					{drum_pad_labels.map(label => (
						<button
							key={label} className="drum-pad"
							id={to_kebab_case(label)}
							onClick={(event): void => handle_click(event, label)}
						>
							<audio
								id={drum_pads[label].hotkey.toLocaleUpperCase()}
								className="clip"
								src={drum_pads[label].audio}
							/>
							{drum_pads[label].hotkey.toLocaleUpperCase()}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
