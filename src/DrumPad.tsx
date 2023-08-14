import { useEffect, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";

interface Props {
	label: DrumPadLabel
	hotkey_pressed: DrumPadHotkey | ""
	set_audio_to_play: React.Dispatch<React.SetStateAction< DrumPadLabel | "">>
}

export default function DrumPad(
	{ label, hotkey_pressed, set_audio_to_play }: Props
): ReactElement {
	const audio_id = DRUM_PADS[label].hotkey.toLocaleUpperCase();
	function play(audio: HTMLAudioElement): void {
		audio.currentTime = 0;
		set_audio_to_play(label);
		audio.play().catch(err => console.error(err));
	}

	function handle_click(): void {
		const audio = document.getElementById(audio_id) as HTMLAudioElement;
		play(audio);
	}

	useEffect((): void => {
		const is_valid_hotkey = DRUM_PAD_HOTKEYS
			.indexOf(hotkey_pressed as DrumPadHotkey) !== -1;
		if (!is_valid_hotkey) return;
		const is_matching_hotkey = audio_id.toLocaleLowerCase() === hotkey_pressed;

		if (is_matching_hotkey) play(audio);
	});

	return (
		<button
			className="drum-pad"
			id={to_kebab_case(label)}
			onClick={handle_click}
		>
			<audio
				id={audio_id}
				className="clip"
				src={DRUM_PADS[label].audio}
			/>
			{DRUM_PADS[label].hotkey.toLocaleUpperCase()}
		</button>
	);
}

