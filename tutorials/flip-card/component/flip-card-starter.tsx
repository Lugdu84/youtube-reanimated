import { Pressable, View } from 'react-native';

import { type FlipCardProps, styles } from '@/tutorials/flip-card/component/shared';

export function FlipCardStarter({
	front,
	back,
	isFlipped,
	onPress,
	width = 240,
	height = 320,
	style,
}: FlipCardProps) {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.container, style, { width, height }]}
			accessibilityRole="button"
			accessibilityLabel="Retourner la carte">
			<View style={styles.face}>
				{isFlipped ? back : front}
			</View>
		</Pressable>
	);
}
