import React, { FC, PropsWithChildren } from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import { StatusBar } from 'expo-status-bar';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { vs } from 'react-native-size-matters';

import { Dimens } from '@app/styles';

import { useStyles } from './styles';

interface Props {
	image: string;
	containerStyle?: StyleProp<ViewStyle>;
}

const MAX_HEIGHT = vs(220);

export const CollapsingHeader: FC<PropsWithChildren<Props>> = ({
	image,
	containerStyle,
	children
}) => {
	const headerMinHeight = useHeaderHeight() + Dimens.STATUSBAR_HEIGHT;
	const headerScrollDistance = MAX_HEIGHT - headerMinHeight;

	const styles = useStyles(useSafeAreaInsets());
	const scrollY = useSharedValue(0);
	const scrollHandler = useAnimatedScrollHandler(event => {
		scrollY.value = event.contentOffset.y;
	});
	const animatedHeaderStyle = useAnimatedStyle(() => {
		const headerHeight = interpolate(
			scrollY.value,
			[0, headerScrollDistance],
			[MAX_HEIGHT, headerMinHeight],
			Extrapolate.CLAMP
		);

		return { height: headerHeight };
	});

	return (
		<View style={styles.root}>
			<StatusBar style='light' backgroundColor='transparent' translucent />
			<Animated.ScrollView
				contentContainerStyle={[containerStyle, { paddingTop: MAX_HEIGHT }]}
				onScroll={scrollHandler}
				scrollEventThrottle={16}>
				{children}
			</Animated.ScrollView>
			<Animated.View style={[styles.header, animatedHeaderStyle]}>
				<Image
					source={{ uri: image }}
					defaultSource={require('@app/assets/default-news.jpg')}
					style={styles.image}
				/>
				<View style={styles.corners} />
			</Animated.View>
		</View>
	);
};
