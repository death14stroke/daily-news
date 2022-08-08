import React, { FC, memo } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Avatar, Card, Text } from '@rneui/themed';

import { Source } from '@app/models';

import { useStyles } from './styles';

interface Props {
	source: Source;
	onPress?: () => void;
	containerStyle?: StyleProp<ViewStyle>;
}

export const SourceCard: FC<Props> = ({
	source: { name, description },
	onPress,
	containerStyle
}) => {
	const styles = useStyles();

	return (
		<Card containerStyle={[styles.cardContainer, containerStyle]}>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.innerContainer}>
					<View style={styles.imageContainer}>
						<Avatar
							size='medium'
							rounded
							title={name.charAt(0)}
							overlayContainerStyle={styles.avatar}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.description} numberOfLines={4} ellipsizeMode='tail'>
							{description}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</Card>
	);
};

export default memo(
	SourceCard,
	(prevProps, nextProps) => prevProps.source.url === nextProps.source.url
);
