import type { ComponentType } from 'react';

import {
	FlipCardResultScreen,
	FlipCardStarterScreen,
} from '@/tutorials/flip-card/flip-card-screen';
import { InstagramAnimationsResultScreen } from '@/tutorials/instagram-animations/result-screen';
import { InstagramAnimationsStarterScreen } from '@/tutorials/instagram-animations/starter-screen';
import { ShakeResultScreen } from '@/tutorials/shake/result-screen';
import { ShakeStarterScreen } from '@/tutorials/shake/starter-screen';

export type TutorialRecord = {
	title: string;
	description: string;
	starterScreen: ComponentType;
	resultScreen: ComponentType;
	youtube?: {
		url: string;
		thumbnailUrl?: string;
		label?: string;
	};
};

export const tutorialRegistry = {
	shake: {
		title: 'Password Shake',
		description:
			'Animation de secousse du champ mot de passe si la valeur est incorrecte.',
		starterScreen: ShakeStarterScreen,
		resultScreen: ShakeResultScreen,
		youtube: {
			url: 'https://youtu.be/PmE6Il3bM3w',
			label: 'Voir la video du tutoriel',
		},
	},
	'flip-card': {
		title: 'Flip Card',
		description:
			'Carte recto/verso réutilisable avec contenu image + texte, base idéale pour un memory game.',
		starterScreen: FlipCardStarterScreen,
		resultScreen: FlipCardResultScreen,
		youtube: {
			url: 'https://youtu.be/fyqJi9xVY2w',
			label: 'Voir la video du tutoriel',
		},
	},
	'instagram-animations': {
		title: 'Instagram Animations',
		description:
			"Animations CSS du cœur (like) et du repost comme dans l'application Instagram.",
		starterScreen: InstagramAnimationsStarterScreen,
		resultScreen: InstagramAnimationsResultScreen,
		youtube: {
			url: 'https://youtu.be/7MiB0AxJojw',
			label: 'Voir la video du tutoriel',
		},
	},
} as const satisfies Record<string, TutorialRecord>;

export type TutorialId = keyof typeof tutorialRegistry;

export function isTutorialId(value: string): value is TutorialId {
	return value in tutorialRegistry;
}

export const tutorials = Object.entries(tutorialRegistry).map(
	([id, tutorial]) => ({
		id: id as TutorialId,
		...tutorial,
	}),
);
