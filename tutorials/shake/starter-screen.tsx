import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const CORRECT_PASSWORD = '1234';

export function ShakeStarterScreen() {
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		if (password !== CORRECT_PASSWORD) {
			console.log('Mauvais mot de passe !');
			// Ici, on déclenchera l'animation de shake
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Connexion</Text>

			<View>
				<TextInput
					style={styles.input}
					placeholder="Mot de passe"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			<Pressable
				style={styles.button}
				onPress={handleSubmit}>
				<Text style={styles.buttonText}>Se connecter</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 32,
	},
	input: {
		width: 300,
		borderWidth: 1.5,
		borderColor: '#ccc',
		borderRadius: 10,
		padding: 14,
		fontSize: 16,
		marginBottom: 16,
	},
	button: {
		width: 300,
		backgroundColor: '#007AFF',
		padding: 16,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
});
