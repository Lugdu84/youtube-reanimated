import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderNavLink } from '@/components/header-nav-link';
import { YouTubeLink } from '@/components/youtube-link';
import { isTutorialId, tutorialRegistry, type TutorialRecord } from '@/tutorials/catalog';

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

	const tutorial: TutorialRecord = tutorialRegistry[tutorialId];

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

			{tutorial.youtube ? (
				<YouTubeLink
					url={tutorial.youtube.url}
					label={tutorial.youtube.label}
					thumbnailUrl={tutorial.youtube.thumbnailUrl}
					style={styles.youtubeCard}
				/>
			) : null}
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
	youtubeCard: {
		marginTop: 14,
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
