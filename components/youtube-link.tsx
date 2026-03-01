import * as Linking from 'expo-linking';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	type StyleProp,
	type TextStyle,
	type ViewStyle,
} from 'react-native';

type YouTubeLinkProps = {
	url: string;
	label?: string;
	thumbnailUrl?: string;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
};

function getYoutubeThumbnail(url: string): string | undefined {
	try {
		const parsed = new URL(url);
		const host = parsed.hostname.replace('www.', '');

		if (host === 'youtube.com' || host === 'm.youtube.com') {
			const videoId = parsed.searchParams.get('v');
			if (videoId) {
				return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
			}
		}

		if (host === 'youtu.be') {
			const videoId = parsed.pathname.split('/').filter(Boolean)[0];
			if (videoId) {
				return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
			}
		}
	} catch {
		// No-op: invalid URL or unsupported shape.
	}

	return undefined;
}

export function YouTubeLink({
	url,
	label = 'Voir la video du tutoriel',
	thumbnailUrl,
	style,
	textStyle,
}: YouTubeLinkProps) {
	const resolvedThumbnail = thumbnailUrl ?? getYoutubeThumbnail(url);

	return (
		<Pressable
			accessibilityRole="link"
			accessibilityLabel={label}
			onPress={() => {
				void Linking.openURL(url);
			}}
			style={({ pressed }) => [
				styles.card,
				pressed && styles.cardPressed,
				style,
			]}>
			{resolvedThumbnail ? (
				<Image
					source={{ uri: resolvedThumbnail }}
					style={styles.thumbnail}
				/>
			) : (
				<View style={[styles.thumbnail, styles.thumbnailFallback]}>
					<Text style={styles.fallbackText}>YouTube</Text>
				</View>
			)}
			<View style={styles.captionWrap}>
				<Text style={[styles.label, textStyle]}>{label}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#eaecf0',
		overflow: 'hidden',
	},
	cardPressed: {
		opacity: 0.9,
	},
	thumbnail: {
		width: '100%',
		aspectRatio: 16 / 9,
	},
	thumbnailFallback: {
		backgroundColor: '#CD201F',
		alignItems: 'center',
		justifyContent: 'center',
	},
	fallbackText: {
		fontSize: 24,
		fontWeight: '800',
		color: '#fff',
	},
	captionWrap: {
		paddingHorizontal: 12,
		paddingVertical: 10,
	},
	label: {
		fontSize: 15,
		fontWeight: '600',
		color: '#101828',
	},
});
