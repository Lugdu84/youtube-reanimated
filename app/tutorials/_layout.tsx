import { Stack } from 'expo-router';

export default function TutorialsLayout() {
	return (
		<Stack screenOptions={{ headerBackVisible: false }}>
			<Stack.Screen
				name="index"
				options={{ title: 'Tutorials' }}
			/>
			<Stack.Screen
				name="[tutorialId]/index"
				options={{ title: 'Tutorial' }}
			/>
			<Stack.Screen
				name="[tutorialId]/starter"
				options={{ title: 'Starter' }}
			/>
			<Stack.Screen
				name="[tutorialId]/result"
				options={{ title: 'Result' }}
			/>
		</Stack>
	);
}
