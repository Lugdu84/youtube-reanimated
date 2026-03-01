import { Pressable, View } from 'react-native';

import {
	type FlipCardProps,
	styles,
} from '@/tutorials/flip-card/component/shared';

const DURATION = 450;

export function FlipCardStarter({
	front,
	back,
	isFlipped,
	onPress,
	width = 240,
	height = 320,
	style,
}: FlipCardProps) {
	// 1️⃣  Créer la valeur animée (progress) avec useDerivedValue, avec une duration

	// 2️⃣ Style animé de la face avant

	// 3️⃣ Style animé de la face arrière
	return (
		<Pressable
			onPress={onPress}
			style={[styles.container, style, { width, height }]}
			accessibilityRole="button"
			accessibilityLabel="Retourner la carte">
			{/* 4️⃣ Remplacer View par Animated.View et appliquer les styles animés */}
			<View style={styles.face}>{isFlipped ? back : front}</View>
		</Pressable>
	);
}
function withTiming(arg0: number, arg1: { duration: number }): any {
	throw new Error('Function not implemented.');
}
