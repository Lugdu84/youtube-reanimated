import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Reanimated Mini Tutos</Text>
			<Text style={styles.subtitle}>
				Des mini tutoriels Reanimated, courts et concrets : d&apos;abord le
				rendu final, puis la construction pas a pas depuis une base starter.
			</Text>

			<Link
				href="/tutorials"
				style={styles.link}>
				Voir les tutos
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
		backgroundColor: '#f5f7fb',
	},
	title: {
		fontSize: 30,
		fontWeight: '800',
		color: '#101828',
	},
	subtitle: {
		marginTop: 8,
		fontSize: 15,
		lineHeight: 22,
		color: '#475467',
	},
	link: {
		marginTop: 20,
		alignSelf: 'flex-start',
		paddingVertical: 10,
		paddingHorizontal: 14,
		borderRadius: 8,
		backgroundColor: '#175CD3',
		color: '#fff',
		fontWeight: '700',
		overflow: 'hidden',
	},
});
