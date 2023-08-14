import { useEffect, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";
import to_title_case from "./helpers/to_title_case";

interface Props {
	label: DrumPadLabel
	hotkey_pressed: DrumPadHotkey | ""
	set_audio_to_play: React.Dispatch<React.SetStateAction< DrumPadLabel | "">>
}

export default function DrumPad({ label, set_audio_to_play }: Props): ReactElement {
	function handle_click(event: React.MouseEvent<HTMLButtonElement>, label: DrumPadLabel): void {
		const target = event.target as HTMLButtonElement;
		const audio = target.firstChild as HTMLAudioElement;
		audio.play().then(() => set_audio_to_play(label)).catch(err => console.error(err));
	}

	useEffect((): void => {
	
	}, []);

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

