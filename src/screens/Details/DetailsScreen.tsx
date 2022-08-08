import React, { FC, useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { Icon, Text } from '@rneui/themed';
import { format } from 'date-fns';

import { CollapsingHeader } from '@app/components/header';
import { BookmarkContext } from '@app/context';
import { RootStackParamList } from '@app/navigation';

import { useStyles } from './styles';

interface Props {
	route: RouteProp<RootStackParamList, 'Details'>;
}

export const DetailsScreen: FC<Props> = ({ route }) => {
	const { params: news } = route;
	const { title, description, author, urlToImage, category, publishedAt, content } = news;
	const styles = useStyles();

	const { addBookmark, deleteBookmark, isBookmarked } = useContext(BookmarkContext);

	const updateBookmark = () => {
		if (isBookmarked(news)) {
			deleteBookmark(news);
		} else {
			addBookmark(news);
		}
	};

	return (
		<CollapsingHeader image={urlToImage} containerStyle={styles.container}>
			<View style={styles.categoryContainer}>
				<Text style={styles.category}>{category ?? 'All'}</Text>
				<TouchableOpacity onPress={updateBookmark}>
					<Icon
						type='ionicon'
						name={isBookmarked(news) ? 'bookmark' : 'bookmark-outline'}
						size={24}
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.authorContainer}>
				<Text style={styles.author}>By {author || 'Anonymous'} | </Text>
				<Text style={styles.author}>
					{format(new Date(publishedAt), 'MMMM dd, yyyy - HH:mm')}
				</Text>
			</View>
			<Text style={styles.description}>{description}</Text>
			<Text style={styles.content}>{content || 'No content available'}</Text>
		</CollapsingHeader>
	);
};
