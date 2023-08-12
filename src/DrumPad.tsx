import type { ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";
import to_title_case from "./helpers/to_title_case";

window.addEventListener("keydown", (event: KeyboardEvent): void => {
	if (DRUM_PAD_HOTKEYS.indexOf(event.key.toLocaleLowerCase() as DrumPadHotkey) === -1) return;

	const audio = document.querySelector(`audio#${event.key.toUpperCase()}`) as HTMLAudioElement;
	const drum_pad = audio.parentElement as HTMLButtonElement;
	const display = document.querySelector("#display") as HTMLHeadingElement;

	audio
		.play()
		.then((): void => { display.innerText = to_title_case(drum_pad.id).toLocaleUpperCase(); })
		.catch((error): void => console.error(error));
});

interface Props {
	label: DrumPadLabel
	set_audio_to_play: React.Dispatch<React.SetStateAction<DrumPadLabel | "">>
}

export default function DrumPad({ label, set_audio_to_play }: Props): ReactElement {
	function handle_click(event: React.MouseEvent<HTMLButtonElement>, label: DrumPadLabel): void {
		const target = event.target as HTMLButtonElement;
		const audio = target.firstChild as HTMLAudioElement;
		audio.play().then(() => set_audio_to_play(label)).catch(err => console.error(err));
	}
	return (
		<button
			className="drum-pad"
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
	);
}

