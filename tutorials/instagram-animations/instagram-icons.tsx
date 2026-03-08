import Svg, { Circle, G, Line, Path } from 'react-native-svg';

type IconProps = {
	size?: number;
	color?: string;
	filled?: boolean;
};

export function InstagramHeartIcon({
	size = 24,
	color = '#262626',
	filled = false,
}: IconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none">
			<Path
				d="M12 20.8l-1.45-1.32C5.4 14.76 2 11.68 2 8.06 2 5.23 4.24 3 7.05 3c1.6 0 3.13.75 4.1 1.95A5.32 5.32 0 0 1 15.26 3C18.07 3 20.3 5.23 20.3 8.06c0 3.62-3.4 6.7-8.55 11.42L12 20.8z"
				stroke={filled ? 'none' : color}
				strokeWidth={2.2}
				strokeLinecap="round"
				strokeLinejoin="round"
				fill={filled ? color : 'none'}
			/>
		</Svg>
	);
}

export function InstagramCommentIcon({
	size = 24,
	color = '#262626',
}: IconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none">
			<G transform="translate(24 0) scale(-1 1)">
				<Path
					d="M20.6 10.8c0 4.15-3.83 7.5-8.56 7.5-1.18 0-2.31-.2-3.35-.58L4 20.1l1.12-4.28A7.1 7.1 0 0 1 3.5 10.8c0-4.15 3.84-7.5 8.57-7.5s8.54 3.35 8.54 7.5z"
					stroke={color}
					strokeWidth={2.2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</G>
		</Svg>
	);
}

export function InstagramRepostIcon({
	size = 24,
	color = '#262626',
}: IconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none">
			<Path
				d="M16.4 2.8l3.4 3.4-3.4 3.4M4.2 11V9.9a3.9 3.9 0 0 1 3.9-3.9h11.7M7.6 21.2l-3.4-3.4 3.4-3.4M19.8 13v1.1a3.9 3.9 0 0 1-3.9 3.9H4.2"
				stroke={color}
				strokeWidth={2.2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export function InstagramShareIcon({
	size = 24,
	color = '#262626',
}: IconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none">
			<Path
				d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"
				fill="none"
				stroke={color}
				strokeLinejoin="round"
				strokeWidth={2.5}
			/>
			<Line
				x1={7.5}
				y1={12.2}
				x2={16}
				y2={7}
				stroke={color}
				strokeWidth={2.5}
				strokeLinecap="round"
			/>
		</Svg>
	);
}

export function InstagramBookmarkIcon({
	size = 24,
	color = '#262626',
}: IconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none">
			<Path
				d="M5.6 5h12.8v14.8L12 14.6l-6.4 5.2z"
				stroke={color}
				strokeWidth={2.2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export function InstagramDotsIcon({ size = 20, color = '#262626' }: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
			<Circle cx="4" cy="10" r="1.6" fill={color} />
			<Circle cx="10" cy="10" r="1.6" fill={color} />
			<Circle cx="16" cy="10" r="1.6" fill={color} />
		</Svg>
	);
}

export function InstagramCheckIcon({
	size = 10,
	color = '#262626',
}: IconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
			<Path
				d="M4.5 10.5 8.2 14 15.5 6.8"
				stroke={color}
				strokeWidth={2.6}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
