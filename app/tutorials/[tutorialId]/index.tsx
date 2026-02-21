import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderNavLink } from '@/components/header-nav-link';
import { isTutorialId, tutorialRegistry } from '@/tutorials/catalog';

export default function TutorialDetailsScreen() {
	const { tutorialId } = useLocalSearchParams<{ tutorialId: string }>();

	if (!tutorialId || !isTutorialId(tutorialId)) {
		return (
			<View style={styles.container}>
				<Stack.Screen options={{ title: 'Tutorial' }} />
				<Text style={styles.errorText}>Tutoriel introuvable.</Text>
			</View>
		);
	}

	const tutorial = tutorialRegistry[tutorialId];

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: tutorial.title,
					headerLeft: () => (
						<HeaderNavLink
							label="< Tutorials"
							href="/tutorials"
							replace
						/>
					),
				}}
			/>
			<Text style={styles.description}>{tutorial.description}</Text>

			<View style={styles.actions}>
				<Link
					href={{
						pathname: '/tutorials/[tutorialId]/starter',
						params: { tutorialId },
					}}
					style={[styles.link, styles.linkSecondary]}>
					Starter
				</Link>
				<Link
					href={{
						pathname: '/tutorials/[tutorialId]/result',
						params: { tutorialId },
					}}
					style={styles.link}>
					Result
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f7fb',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	description: {
		fontSize: 15,
		lineHeight: 22,
		color: '#475467',
	},
	actions: {
		marginTop: 20,
		flexDirection: 'row',
		gap: 10,
	},
	youtubeLink: {
		marginTop: 14,
		alignSelf: 'flex-start',
		paddingVertical: 8,
	},
	youtubeLinkText: {
		fontSize: 14,
		fontWeight: '600',
		color: '#175CD3',
		textDecorationLine: 'underline',
	},
	link: {
		paddingVertical: 10,
		paddingHorizontal: 14,
		borderRadius: 8,
		backgroundColor: '#175CD3',
		color: '#fff',
		fontWeight: '700',
		overflow: 'hidden',
	},
	linkSecondary: {
		backgroundColor: '#344054',
	},
	errorText: {
		fontSize: 18,
		fontWeight: '600',
		color: '#B42318',
	},
});
