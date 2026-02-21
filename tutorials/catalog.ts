import type { ComponentType } from 'react';

import { ShakeStarterScreen } from '@/tutorials/shake/starter-screen';
import { ShakeResultScreen } from '@/tutorials/shake/result-screen';

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
			url: 'https://www.youtube.com/results?search_query=reanimated+password+shake+tutorial',
			label: 'Regarder le tuto YouTube',
		},
	},
} as const satisfies Record<string, TutorialRecord>;

export type TutorialId = keyof typeof tutorialRegistry;

export function isTutorialId(value: string): value is TutorialId {
	return value in tutorialRegistry;
}

export const tutorials = Object.entries(tutorialRegistry).map(([id, tutorial]) => ({
	id: id as TutorialId,
	...tutorial,
}));
