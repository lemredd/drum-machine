import { useState, type ReactElement } from "react";
import "./App.css";

const drum_pads = {
	"Heater 1": {
		"hotkey": "q",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
	},
	"Heater 2": {
		"hotkey": "w",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
	},
	"Heater 3": {
		"hotkey": "e",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
	},
	"Heater 4": {
		"hotkey": "a",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
	},
	"Clap": {
		"hotkey": "s",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
	},
	"Open HH": {
		"hotkey": "d",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
	},
	"Kick n' Hat": {
		"hotkey": "z",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
	},
	"Kick": {
		"hotkey": "x",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
	},
	"Closed HH": {
		"hotkey": "c",
		"audio": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
	}
} as const;

type DrumPadLabel = keyof typeof drum_pads;
type DrumPadHotkey = (typeof drum_pads)[DrumPadLabel]["hotkey"]
const drum_pad_labels = Object.keys(drum_pads) as DrumPadLabel[];

const to_kebab_case = (str: string): string => str.split(/\s|_|(?=[A-Z])/g).join("-").toLocaleLowerCase();

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
					{audio_to_play}
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
