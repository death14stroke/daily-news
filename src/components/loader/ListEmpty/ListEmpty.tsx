import React, { FC, memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Text, useTheme } from '@rneui/themed';
import AnimatedLottieView from 'lottie-react-native';

import { fs } from '@app/utils';

import { useStyles } from './styles';

interface Props {
	label: string;
	containerStyle?: StyleProp<ViewStyle>;
	fontSize?: number;
}

const EmptyCard: FC<Props> = ({ label, containerStyle, fontSize = fs(16) }) => {
	const styles = useStyles(fontSize);
	const {
		theme: { lottieResources }
	} = useTheme();

	return (
		<View style={[styles.container, containerStyle]}>
			<View style={styles.animationContainer}>
				<AnimatedLottieView
					source={lottieResources.empty}
					style={styles.animation}
					autoPlay
					loop
					resizeMode='cover'
				/>
			</View>
			<View>
				<Text style={styles.label}>{label}</Text>
			</View>
		</View>
	);
};

export default memo(EmptyCard, (prevProps, nextProps) => prevProps.label === nextProps.label);
