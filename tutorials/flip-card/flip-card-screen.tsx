import type { ComponentType } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FlipCardResult } from '@/tutorials/flip-card/component/flip-card-result';
import { FlipCardStarter } from '@/tutorials/flip-card/component/flip-card-starter';
import type { FlipCardProps } from '@/tutorials/flip-card/component/shared';
import { BackFace, FrontFace } from '@/tutorials/flip-card/demo-card-data';

function FlipCardScreen({
	FlipCard,
	subtitle,
}: {
	FlipCard: ComponentType<FlipCardProps>;
	subtitle: string;
}) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleFlip = () => {
		setIsFlipped((value) => !value);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Flip Card</Text>
			<Text style={styles.subtitle}>Clique sur la carte pour la retourner</Text>
			<Text style={styles.badge}>{subtitle}</Text>

			<FlipCard
				front={<FrontFace />}
				back={<BackFace />}
				isFlipped={isFlipped}
				onPress={handleFlip}
				// useSpring={true}
			/>
		</View>
	);
}

export function FlipCardStarterScreen() {
	return (
		<FlipCardScreen
			FlipCard={FlipCardStarter}
			subtitle="Sans animation"
		/>
	);
}

export function FlipCardResultScreen() {
	return (
		<FlipCardScreen
			FlipCard={FlipCardResult}
			subtitle="Avec animation"
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		gap: 14,
		backgroundColor: '#F2F4F7',
	},
	title: {
		fontSize: 28,
		fontWeight: '800',
		color: '#111827',
	},
	subtitle: {
		fontSize: 14,
		color: '#4B5563',
	},
	badge: {
		fontSize: 12,
		color: '#667085',
		backgroundColor: '#E4E7EC',
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 12,
		overflow: 'hidden',
		marginBottom: 10,
	},
});
