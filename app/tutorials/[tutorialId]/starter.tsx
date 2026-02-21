import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderNavLink } from '@/components/header-nav-link';
import { isTutorialId, tutorialRegistry } from '@/tutorials/catalog';

export default function TutorialStarterRoute() {
	const { tutorialId } = useLocalSearchParams<{ tutorialId: string }>();

	if (!tutorialId || !isTutorialId(tutorialId)) {
		return (
			<View style={styles.center}>
				<Stack.Screen options={{ title: 'Starter' }} />
				<Text style={styles.errorText}>Tutoriel introuvable.</Text>
			</View>
		);
	}

	const Screen = tutorialRegistry[tutorialId].starterScreen;

	return (
		<>
			<Stack.Screen
				options={{
					title: 'Starter',
					headerLeft: () => (
						<HeaderNavLink
							label="< Tutorial"
							href={{
								pathname: '/tutorials/[tutorialId]',
								params: { tutorialId },
							}}
							replace
						/>
					),
				}}
			/>
			<Screen />
		</>
	);
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	errorText: {
		fontSize: 18,
		fontWeight: '600',
		color: '#B42318',
	},
});
