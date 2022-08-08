import React, { FC, useContext } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsCard } from '@app/components/listitem';
import { ListEmpty, ListSeparator } from '@app/components/loader';
import { BookmarkContext } from '@app/context';
import { News } from '@app/models';
import { RootStackParamList } from '@app/navigation';
import { Dimens } from '@app/styles';

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Root'>;
}

export const BookmarksScreen: FC<Props> = ({ navigation }) => {
	const { state: bookmarks } = useContext(BookmarkContext);

	const renderBookmark = ({ item }: ListRenderItemInfo<News>) => {
		return (
			<NewsCard
				news={item}
				onPress={() => {
					navigation.navigate('Details', item);
				}}
			/>
		);
	};

	const renderEmpty = <ListEmpty label='No bookmarks found' fontSize={24} />;

	const getItemLayout = (_: unknown, index: number) => {
		const length = Dimens.CARD_RECENTS.height;
		const separatorLength = Dimens.SEPARATOR_ITEM;

		return {
			length,
			index,
			offset: index * length + (2 * index + 1) * separatorLength
		};
	};

	return (
		<FlatList
			data={bookmarks}
			keyExtractor={(news: News) => news.url}
			renderItem={renderBookmark}
			ListHeaderComponent={ListSeparator.Edge}
			ItemSeparatorComponent={ListSeparator.Item}
			ListFooterComponent={ListSeparator.Item}
			ListEmptyComponent={renderEmpty}
			getItemLayout={getItemLayout}
		/>
	);
};
