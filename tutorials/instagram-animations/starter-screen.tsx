import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {
	InstagramBookmarkIcon,
	InstagramCheckIcon,
	InstagramCommentIcon,
	InstagramDotsIcon,
	InstagramHeartIcon,
	InstagramRepostIcon,
	InstagramShareIcon,
} from './instagram-icons';

// 1️⃣ Importer Animated et CSSAnimationKeyframes depuis Reanimated
// import Animated, { CSSAnimationKeyframes } from 'react-native-reanimated';

// 2️⃣ Créer l'objet d'animation du cœur (bounce)
// Le cœur grossit (scale) et saute vers le haut (translateY négatif),
// puis redescend sans rebond.
// const heartBounce: CSSAnimationKeyframes = {};

// 6️⃣ Créer l'objet d'animation du repost (spin)
// const repostSpin: CSSAnimationKeyframes = {};

const ICON_SIZE = 24;

export function InstagramAnimationsStarterScreen() {
	const [isLiked, setIsLiked] = useState(false);
	const [isReposted, setIsReposted] = useState(false);
	// 3️⃣ Ajouter likeKey pour relancer l'animation du cœur
	// const [likeKey, setLikeKey] = useState(0);
	// 7️⃣ Ajouter repostKey pour relancer l'animation du repost
	// const [repostKey, setRepostKey] = useState(0);

	const handleLike = () => {
		const nextLiked = !isLiked;
		setIsLiked(nextLiked);
		// 4️⃣ Incrémenter likeKey uniquement au like
	};

	const handleRepost = () => {
		setIsReposted((prev) => !prev);
		// 8️⃣ Incrémenter repostKey à chaque toggle du repost
	};

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<View style={styles.avatar} />
						<Text style={styles.username}>reanimated_tuto</Text>
					</View>
					<InstagramDotsIcon
						size={20}
						color="#262626"
					/>
				</View>

				<Image
					source={{
						uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
					}}
					style={styles.postImage}
				/>

				<View style={styles.actionBar}>
					<View style={styles.actionBarLeft}>
						{/* 5️⃣ Remplacer View par Animated.View pour le cœur */}
						{/* <Animated.View key={likeKey} style={isLiked && { animationName: heartBounce, ... }}> */}
						<Pressable
							onPress={handleLike}
							hitSlop={8}
							style={styles.iconWithCount}>
							<View>
								<InstagramHeartIcon
									size={ICON_SIZE}
									color={isLiked ? '#ED4956' : '#262626'}
									filled={isLiked}
								/>
							</View>
							<Text style={styles.iconCount}>
								{isLiked ? '1 025' : '1 024'}
							</Text>
						</Pressable>

						<Pressable
							hitSlop={8}
							style={styles.iconWithCount}>
							<InstagramCommentIcon
								size={ICON_SIZE}
								color="#262626"
							/>
							<Text style={styles.iconCount}>42</Text>
						</Pressable>

						{/* 9️⃣ Remplacer View par Animated.View pour le repost */}
						{/* <Animated.View key={repostKey} style={{ animationName: repostSpin, ... }}> */}
						<Pressable
							onPress={handleRepost}
							hitSlop={8}
							style={styles.repostWithCount}>
							<View style={styles.repostContainer}>
								<InstagramRepostIcon
									size={ICON_SIZE}
									color="#262626"
								/>
								{isReposted && (
									<View style={styles.checkBadge}>
										<InstagramCheckIcon
											size={ICON_SIZE - 12}
											color="#262626"
										/>
									</View>
								)}
							</View>
							<Text style={styles.iconCount}>{isReposted ? '13' : '12'}</Text>
						</Pressable>

						<Pressable hitSlop={8}>
							<InstagramShareIcon
								size={ICON_SIZE}
								color="#262626"
							/>
						</Pressable>
					</View>

					<Pressable hitSlop={8}>
						<InstagramBookmarkIcon
							size={ICON_SIZE}
							color="#262626"
						/>
					</Pressable>
				</View>

				<View style={styles.footer}>
					<Text style={styles.caption}>
						<Text style={styles.username}>reanimated_tuto </Text>
						CSS Animations avec Reanimated
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	card: {
		width: '100%',
		maxWidth: 400,
		backgroundColor: '#fff',
		borderRadius: 8,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#dbdbdb',
		overflow: 'hidden',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		paddingVertical: 10,
	},
	headerLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	avatar: {
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: '#c7c7c7',
		borderWidth: 1,
		borderColor: '#dbdbdb',
	},
	username: {
		fontWeight: '600',
		fontSize: 13,
		color: '#262626',
	},
	postImage: {
		width: '100%',
		aspectRatio: 1,
		backgroundColor: '#efefef',
	},
	actionBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 10,
	},
	actionBarLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	iconWithCount: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	repostWithCount: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	iconCount: {
		fontSize: 13,
		fontWeight: '600',
		color: '#262626',
	},
	repostContainer: {
		width: ICON_SIZE,
		height: ICON_SIZE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkBadge: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		width: 12,
		height: 12,
		marginLeft: -6,
		marginTop: -6,
		borderRadius: 6,
		backgroundColor: '#fff',
		zIndex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	footer: {
		paddingHorizontal: 12,
		paddingBottom: 12,
		gap: 4,
	},
	caption: {
		fontSize: 13,
		color: '#262626',
		lineHeight: 18,
	},
});
