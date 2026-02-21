import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withTiming,
} from 'react-native-reanimated';

const CORRECT_PASSWORD = '1234';

export function ShakeResultScreen() {
	const [password, setPassword] = useState('');

	// 1️⃣ La valeur partagée — position X du champ (0 = centre)
	const shakeX = useSharedValue(0);
	// 👆 C'est la position horizontale de notre champ.
	// 0 = position normale, au centre.
	// La particularité : cette valeur est partagée entre
	// le thread JS et le thread UI — c'est pour ça que
	// l'animation est fluide même si ton JS est occupé.

	// 2️⃣ Le style animé — relie shakeX à translateX
	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: shakeX.value }],
		// 👆 À chaque fois que shakeX change,
		// translateX se met à jour automatiquement.
		// translateX déplace le composant horizontalement.
	}));

	// 3️⃣ La fonction shake — déclenche la séquence d'animation
	const shake = () => {
		shakeX.value = withSequence(
			// 👆 withSequence enchaîne les animations l'une après l'autre
			withTiming(-10, { duration: 50 }), // ← déplace à gauche (-10px) en 50ms
			withTiming(10, { duration: 50 }), // → déplace à droite (+10px) en 50ms
			withTiming(-10, { duration: 50 }), // ← gauche encore
			withTiming(10, { duration: 50 }), // → droite encore
			withTiming(0, { duration: 50 }), // ↩ retour au centre
			// Total : 5 × 50ms = 250ms — rapide et percutant
		);
	};

	const handleSubmit = () => {
		if (password !== CORRECT_PASSWORD) {
			// 4️⃣ On déclenche le shake si le mot de passe est faux
			shake();
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Connexion</Text>

			{/* 5️⃣ On remplace View par Animated.View et on applique animatedStyle */}
			<Animated.View style={animatedStyle}>
				<TextInput
					style={styles.input}
					placeholder="Mot de passe"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</Animated.View>

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
