import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { HeaderNavLink } from '@/components/header-nav-link';
import { TutorialLinkRow } from '@/components/tutorial-link-row';
import { tutorials } from '@/tutorials/catalog';

export default function TutorialsScreen() {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					headerLeft: () => (
						<HeaderNavLink
							label="< Home"
							href="/"
							replace
						/>
					),
				}}
			/>
			<View style={styles.list}>
				{tutorials.map((tutorial) => (
					<TutorialLinkRow
						key={tutorial.id}
						title={tutorial.title}
						description={tutorial.description}
						href={{
							pathname: '/tutorials/[tutorialId]',
							params: { tutorialId: tutorial.id },
						}}
					/>
				))}
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
	list: {
		gap: 12,
	},
});
