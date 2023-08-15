import { useState, useEffect, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";

interface Props {
	label: DrumPadLabel
	set_audio_to_play: React.Dispatch<React.SetStateAction< DrumPadLabel | "">>
}

export default function DrumPad(
	{ label, set_audio_to_play }: Props
): ReactElement {
	const [is_active, set_is_active] = useState<boolean>(false);

	const audio_id = DRUM_PADS[label].hotkey;
	function play(): void {
		const audio = document.getElementById(audio_id) as HTMLAudioElement;
		set_is_active(true);
		audio.currentTime = 0;
		set_audio_to_play(label);
		audio.play().catch(err => console.error(err));
		setTimeout(() => set_is_active(false), 100);
	}

	useEffect((): void => {
		// OK. I give up. It seems to me that there is no other way.
		document.addEventListener("keydown", (event: KeyboardEvent) => {
			const is_valid_hotkey = DRUM_PAD_HOTKEYS.indexOf(event.code as DrumPadHotkey) !== -1;
			if (!is_valid_hotkey) return;

			const is_matching_hotkey = `Key${audio_id}` === event.code;

			if (is_matching_hotkey && is_valid_hotkey) play();
		});
	/* eslint-disable react-hooks/exhaustive-deps */
	}, []);

	return (
		<button
			className={`drum-pad ${is_active && "active"}`}
			id={to_kebab_case(label)}
			onClick={play}
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

