import type { ReactNode } from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';

export type FlipCardProps = {
	front: ReactNode;
	back: ReactNode;
	isFlipped: boolean;
	onPress?: () => void;
	width?: number;
	height?: number;
	style?: ViewStyle;
	useSpring?: boolean; // option pour l'animation avec useSpring
};

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	face: {
		position: 'absolute',
		inset: 0,
		borderRadius: 18,
		overflow: 'hidden',
		backfaceVisibility: 'hidden',
		borderWidth: 1,
		borderColor: '#D0D5DD',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 8 },
		shadowRadius: 16,
		elevation: 4,
	},
});
