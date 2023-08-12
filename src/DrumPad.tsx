import { useEffect, type ReactElement } from "react";

import type { DrumPadLabel, DrumPadHotkey } from "./types";

import { DRUM_PADS, DRUM_PAD_HOTKEYS } from "./constants";

import to_kebab_case from "./helpers/to_kebab_case";
import to_title_case from "./helpers/to_title_case";

interface Props<TDrumPadLabelState = DrumPadLabel | ""> {
	label: DrumPadLabel
	audio_to_play: TDrumPadLabelState
	set_audio_to_play: React.Dispatch<React.SetStateAction<TDrumPadLabelState>>
}

export default function DrumPad({ label, audio_to_play, set_audio_to_play }: Props): ReactElement {
	function handle_click(event: React.MouseEvent<HTMLButtonElement>, label: DrumPadLabel): void {
		const target = event.target as HTMLButtonElement;
		const audio = target.firstChild as HTMLAudioElement;
		audio.play().then(() => set_audio_to_play(label)).catch(err => console.error(err));
	}

	function listen_for_hotkey_press(event: KeyboardEvent): void {
		if (DRUM_PAD_HOTKEYS.indexOf(event.key.toLocaleLowerCase() as DrumPadHotkey) === -1) return;

		const audio = document.querySelector(`audio#${event.key.toUpperCase()}`) as HTMLAudioElement;
		const { "id": drum_pad_btn_id } = audio.parentElement as HTMLButtonElement;
		const label = to_title_case(drum_pad_btn_id).toLocaleUpperCase();

		audio
			.play()
			.then((): void => set_audio_to_play(label as DrumPadLabel))
			.catch((error): void => console.error(error));
	}

	useEffect((): () => (void) => {
		window.addEventListener("keydown", listen_for_hotkey_press);

		return (): void => window.removeEventListener("keydown", listen_for_hotkey_press);
	}, [audio_to_play]);

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

