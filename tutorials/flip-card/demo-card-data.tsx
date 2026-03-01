import { Image, StyleSheet, Text, View } from 'react-native';

export function FrontFace() {
	return (
		<View style={[styles.face, { backgroundColor: '#E6F7FF' }]}>
			<Text style={styles.badge}>🤔</Text>
			<Image
				source={require('@/assets/images/react-logo.png')}
				resizeMode="contain"
				style={styles.image}
			/>
			<Text style={styles.title}>Qui suis-je ?</Text>
			<Text style={styles.subtitle}>Clique pour découvrir</Text>
		</View>
	);
}

export function BackFace() {
	return (
		<View style={[styles.face, { backgroundColor: '#ECFDF3' }]}>
			<Text style={styles.badge}>✅</Text>
			<Image
				source={require('@/assets/images/react-logo.png')}
				resizeMode="contain"
				style={styles.image}
			/>
			<Text style={styles.title}>React</Text>
			<Text style={styles.subtitle}>Bibliothèque UI JavaScript</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	face: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
	image: {
		width: 92,
		height: 92,
		marginBottom: 6,
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		textAlign: 'center',
		color: '#101828',
	},
	subtitle: {
		fontSize: 14,
		textAlign: 'center',
		opacity: 0.8,
		color: '#101828',
	},
	badge: {
		position: 'absolute',
		top: 12,
		right: 12,
		fontSize: 26,
	},
});
