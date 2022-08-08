import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, TouchableOpacity, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon, SearchBar } from '@rneui/themed';
import _ from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDebounce } from 'use-debounce';

import { NewsCard } from '@app/components/listitem';
import { ListEmpty, ListLoading, ListSeparator } from '@app/components/loader';
import { useSearchQuery } from '@app/hooks/news';
import { usePlatformForSearchBar } from '@app/hooks/platform';
import { News } from '@app/models';
import { RootStackParamList } from '@app/navigation';
import { Dimens } from '@app/styles';

import { useStyles } from './styles';

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
}

export const SearchScreen: FC<Props> = ({ navigation }) => {
	const styles = useStyles(useSafeAreaInsets());
	const [rawQuery, setRawQuery] = useState('');
	const query = useDebounce(rawQuery, 1000)[0].trim().toLowerCase();
	const platform = usePlatformForSearchBar();
	const { data, isFetching, fetchNextPage, hasNextPage, refetch, isFetchingNextPage } =
		useSearchQuery(query);

	useEffect(() => {
		if (query.length >= 3) {
			refetch();
		} else {
			console.info('Query must be atleast 3 characters!');
		}
	}, [query, refetch]);

	const updateRawQuery = (query: string) => {
		setRawQuery(query);
	};

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};

	const header = useCallback(() => {
		return (
			<View style={styles.headerContainerStyle}>
				<TouchableOpacity style={styles.upArrowStyle} onPress={() => navigation.pop()}>
					<Icon type='ionicon' name='chevron-back' size={24} />
				</TouchableOpacity>
				<View style={styles.searchContainer}>
					<SearchBar
						placeholder='Search'
						value={rawQuery}
						onChangeText={updateRawQuery}
						platform={platform}
						showLoading={isFetching}
					/>
				</View>
			</View>
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rawQuery, navigation, isFetching]);

	const renderNewsCard = ({ item }: ListRenderItemInfo<News>) => {
		return (
			<NewsCard
				news={item}
				onPress={() => {
					navigation.navigate('Details', item);
				}}
			/>
		);
	};

	const renderEmpty = <ListEmpty label='No results found' fontSize={24} />;

	const renderFooter = <ListLoading isFetching={isFetchingNextPage} />;

	const getItemLayout = (_: unknown, index: number) => {
		const length = Dimens.CARD_RECENTS.height;
		const separatorLength = Dimens.SEPARATOR_ITEM;

		return {
			length,
			index,
			offset: index * length + (2 * index + 1) * separatorLength
		};
	};

	useLayoutEffect(() => {
		navigation.setOptions({ headerShown: true, header });
	}, [navigation, header]);

	const results = _.flatten(data?.pages.map(page => page));

	return (
		<FlatList
			keyExtractor={news => news.url}
			renderItem={renderNewsCard}
			data={results}
			style={styles.root}
			ListFooterComponent={renderFooter}
			ItemSeparatorComponent={ListSeparator.Item}
			ListEmptyComponent={renderEmpty}
			scrollEnabled={results.length > 0}
			onEndReached={loadMore}
			onEndReachedThreshold={0.3}
			getItemLayout={getItemLayout}
		/>
	);
};
