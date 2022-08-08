import React, { FC, memo } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { Text } from '@rneui/themed';
import { format } from 'date-fns';

import { News } from '@app/models';

import { useStyles } from './styles';

interface Props {
	news: News;
	onPress: () => void;
}

const HighlightsCard: FC<Props> = ({ news: { title, publishedAt, urlToImage }, onPress }) => {
	const styles = useStyles();
	const date = format(new Date(publishedAt), 'MMMM dd, yyyy');

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.6}>
			<ImageBackground
				imageStyle={styles.image}
				source={{ uri: urlToImage }}
				style={styles.imageContainer}
				defaultSource={require('@app/assets/default-news.jpg')}>
				<View style={styles.textContainer}>
					<Text numberOfLines={3} ellipsizeMode='tail' style={styles.title}>
						{title}
					</Text>
					<Text style={styles.date}>{date}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default memo(
	HighlightsCard,
	(prevProps, nextProps) => prevProps.news.url === nextProps.news.url
);
