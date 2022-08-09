import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';

import { HighlightsList } from '@app/components/list';
import { NewsCard } from '@app/components/listitem';
import { ListEmpty, ListSeparator, SkeletonNewsCard } from '@app/components/loader';
import { useRecentsQuery } from '@app/hooks/news';
import { News } from '@app/models';
import { RootStackParamList } from '@app/navigation';
import { Dimens } from '@app/styles';
import { fs } from '@app/utils';

type Props = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Root'>;
};

export const HomeScreen: FC<Props> = ({ navigation }) => {
	const { data: recents, isLoading } = useRecentsQuery();

	const renderRecent = ({ item }: ListRenderItemInfo<News>) => {
		return (
			<NewsCard
				news={item}
				onPress={() => {
					navigation.navigate('Details', item);
				}}
			/>
		);
	};

	const renderHighlightsList = () => {
		return (
			<View>
				<HighlightsList />
				<Text h4>Recent News</Text>
			</View>
		);
	};

	const renderEmpty = isLoading ? (
		<SkeletonNewsCard />
	) : (
		<ListEmpty label='No recents found' fontSize={fs(24)} />
	);

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
			data={recents}
			keyExtractor={news => `${news.url}-${news.category || 'All'}`}
			renderItem={renderRecent}
			scrollEnabled={recents && recents.length > 0}
			ListHeaderComponent={renderHighlightsList}
			ItemSeparatorComponent={ListSeparator.Item}
			ListEmptyComponent={renderEmpty}
			ListFooterComponent={ListSeparator.Edge}
			getItemLayout={getItemLayout}
		/>
	);
};
