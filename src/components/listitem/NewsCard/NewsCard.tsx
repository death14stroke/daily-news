import React, { FC, memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Card, Text } from '@rneui/themed';

import { News } from '@app/models';

import { useStyles } from './styles';

interface Props {
	news: News;
	onPress?: () => void;
}

const NewsCard: FC<Props> = ({ news: { title, category, urlToImage }, onPress }) => {
	const styles = useStyles();

	return (
		<Card containerStyle={styles.cardContainer}>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.innerCardContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={{ uri: urlToImage }}
							style={styles.image}
							defaultSource={require('@app/assets/default-news.jpg')}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.category}>{category || 'All'}</Text>
						<Text style={styles.title} numberOfLines={3} ellipsizeMode='tail'>
							{title}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</Card>
	);
};

export default memo(NewsCard, (prevProps, nextProps) => prevProps.news.url === nextProps.news.url);
