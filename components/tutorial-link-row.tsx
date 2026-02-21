import type { Href } from 'expo-router';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TutorialLinkRowProps = {
	title: string;
	description?: string;
	href: Href;
};

export function TutorialLinkRow({ title, description, href }: TutorialLinkRowProps) {
	return (
		<Link
			href={href}
			asChild>
			<Pressable style={styles.row}>
				<View style={styles.textWrap}>
					<Text style={styles.title}>{title}</Text>
					{description ? <Text style={styles.description}>{description}</Text> : null}
				</View>
				<Text style={styles.chevron}>{'>'}</Text>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	row: {
		backgroundColor: '#fff',
		borderRadius: 12,
		paddingVertical: 14,
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: '#eaecf0',
	},
	textWrap: {
		flex: 1,
		paddingRight: 12,
	},
	title: {
		fontSize: 17,
		fontWeight: '600',
		color: '#101828',
	},
	description: {
		marginTop: 4,
		fontSize: 13,
		lineHeight: 18,
		color: '#667085',
	},
	chevron: {
		fontSize: 20,
		color: '#98a2b3',
		fontWeight: '500',
	},
});
