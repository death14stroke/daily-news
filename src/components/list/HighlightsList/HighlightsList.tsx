import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import _ from 'lodash';

import { HighlightsCard } from '@app/components/listitem';
import { ListEmpty, ListLoading, ListSeparator, SkeletonHighlights } from '@app/components/loader';
import { useHighlightsQuery } from '@app/hooks/news';
import { News } from '@app/models';
import { RootStackParamList } from '@app/navigation';
import { Dimens } from '@app/styles';

import { useStyles } from './styles';

interface Props {
	category?: string;
}

export const HighlightsList: FC<Props> = ({ category }) => {
	const styles = useStyles();
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
		useHighlightsQuery(category);

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};

	const renderHighlight = ({ item }: ListRenderItemInfo<News>) => (
		<HighlightsCard
			news={item}
			onPress={() => {
				navigation.navigate('Details', item);
			}}
		/>
	);

	const renderFooter = <ListLoading isFetching={isFetchingNextPage} />;

	const renderEmpty = isLoading ? (
		<SkeletonHighlights />
	) : (
		<ListEmpty label='No highlights found' containerStyle={styles.empty} />
	);

	const getItemLayout = (_: unknown, index: number) => {
		const length = Dimens.CARD_HIGHLIGHTS.width;
		const separatorLength = Dimens.SEPARATOR_ITEM;

		return {
			length,
			index,
			offset: index * length + (2 * index + 1) * separatorLength
		};
	};

	const results = _.flatten(data?.pages.map(page => page));

	return (
		<FlatList
			data={results}
			keyExtractor={news => news.url}
			renderItem={renderHighlight}
			horizontal
			showsHorizontalScrollIndicator={false}
			scrollEnabled={results.length > 0}
			contentContainerStyle={styles.horizontalList}
			ItemSeparatorComponent={ListSeparator.Item}
			ListHeaderComponent={ListSeparator.Edge}
			ListFooterComponent={renderFooter}
			ListEmptyComponent={renderEmpty}
			onEndReached={loadMore}
			onEndReachedThreshold={0.3}
			getItemLayout={getItemLayout}
		/>
	);
};
