import { Pressable } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedStyle,
	useDerivedValue,
	withTiming,
} from 'react-native-reanimated';

import {
	type FlipCardProps,
	styles,
} from '@/tutorials/flip-card/component/shared';

const DURATION = 450;

export function FlipCardResult({
	front,
	back,
	isFlipped,
	onPress,
	width = 240,
	height = 320,
	style,
}: FlipCardProps) {
	// 1️⃣ La valeur partagée — progression du flip (0 = recto, 1 = verso)
	// const progress = useSharedValue(isFlipped ? 1 : 0); ===> remplacé par useDerivedValue
	// 👆 cette valeur est partagée entre
	// le thread JS et le thread UI — l'animation reste fluide.

	// 2️⃣ Quand isFlipped change, on anime la progression
	// useEffect(() => {
	// 	progress.value = withTiming(isFlipped ? 1 : 0, { duration: DURATION }); ==> remplacé par useDerivedValue
	// }, [isFlipped, progress]);

	// 5️⃣ avec useDerivedValue, on n'a plus besoin de useEffect pour animer la valeur (en fin de vidéo, pour refactor)
	const progress = useDerivedValue(() => {
		return withTiming(isFlipped ? 1 : 0, { duration: DURATION });
	});

	// 3️⃣ Style animé de la face avant — rotation de 0° à 180°
	const frontStyle = useAnimatedStyle(() => {
		const rotateY = interpolate(progress.value, [0, 1], [0, 180]);
		return {
			transform: [{ perspective: 1000 }, { rotateY: `${rotateY}deg` }],
		};
		// 👆 perspective donne l'effet 3D
		// rotateY fait tourner la carte sur l'axe vertical
		// backfaceVisibility: 'hidden' (dans les styles) cache la face
		// quand elle est retournée (> 90°)
	});

	// 4️⃣ Style animé de la face arrière — rotation de 180° à 360°
	const backStyle = useAnimatedStyle(() => {
		const rotateY = interpolate(progress.value, [0, 1], [180, 360]);
		return {
			transform: [{ rotateY: `${rotateY}deg` }],
		};
		// 👆 La face arrière commence retournée (180°) et
		// revient à 360° (= 0°) quand on flip
	});

	return (
		<Pressable
			onPress={onPress}
			style={[styles.container, style, { width, height }]}
			accessibilityRole="button"
			accessibilityLabel="Retourner la carte">
			{/* 5️⃣ On remplace View par Animated.View et on applique les styles animés */}
			<Animated.View style={[styles.face, frontStyle]}>{front}</Animated.View>

			<Animated.View style={[styles.face, backStyle]}>{back}</Animated.View>
		</Pressable>
	);
}
