import { useEffect, useRef, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";
import to_title_case from "./helpers/to_title_case";

interface Props {
	label: DrumPadLabel
	hotkey_pressed: DrumPadHotkey | ""
	set_audio_to_play: React.Dispatch<React.SetStateAction< DrumPadLabel | "">>
}

export default function DrumPad(
	{ label, hotkey_pressed, set_audio_to_play }: Props
): ReactElement {
	const audio = useRef<HTMLAudioElement>(null);

	function handle_click(label: DrumPadLabel): void {
		audio.current!
			.play()
			.then(() => set_audio_to_play(label))
			.catch(err => console.error(err));
	}

	useEffect((): void => {
	
	}, []);

	return (
		<button
			className="drum-pad"
			id={to_kebab_case(label)}
			onClick={(): void => handle_click(label)}
		>
			<audio
				id={DRUM_PADS[label].hotkey.toLocaleUpperCase()}
				className="clip"
				ref={audio}
				src={DRUM_PADS[label].audio}
			/>
			{DRUM_PADS[label].hotkey.toLocaleUpperCase()}
		</button>
	);
}

