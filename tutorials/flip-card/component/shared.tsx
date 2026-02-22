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
		boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
		elevation: 4,
	},
});
