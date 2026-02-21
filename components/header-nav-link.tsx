import type { Href } from 'expo-router';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

type HeaderNavLinkProps = {
	label: string;
	href: Href;
	replace?: boolean;
};

export function HeaderNavLink({ label, href, replace }: HeaderNavLinkProps) {
	return (
		<Link
			href={href}
			replace={replace}
			asChild>
			<Pressable
				android_ripple={{ color: 'transparent' }}
				style={styles.button}>
				<Text style={styles.label}>{label}</Text>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 4,
		paddingRight: 8,
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		color: '#175CD3',
	},
});
