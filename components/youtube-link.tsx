import * as Linking from 'expo-linking';
import { Pressable, StyleSheet, Text, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

type YouTubeLinkProps = {
	url: string;
	label?: string;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
};

export function YouTubeLink({
	url,
	label = 'Voir le tuto YouTube',
	style,
	textStyle,
}: YouTubeLinkProps) {
	return (
		<Pressable
			accessibilityRole="link"
			onPress={() => {
				void Linking.openURL(url);
			}}
			style={[styles.link, style]}>
			<Text style={[styles.label, textStyle]}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	link: {
		alignSelf: 'flex-start',
		paddingVertical: 8,
	},
	label: {
		fontSize: 14,
		fontWeight: '600',
		color: '#175CD3',
		textDecorationLine: 'underline',
	},
});
