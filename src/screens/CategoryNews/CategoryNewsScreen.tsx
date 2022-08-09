import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Text } from '@rneui/themed';

import { HighlightsList } from '@app/components/list';
import { SourceCard } from '@app/components/listitem';
import { ListEmpty, ListSeparator, SkeletonSourceCard } from '@app/components/loader';
import { useSourcesQuery } from '@app/hooks/source';
import { Source } from '@app/models';
import { Dimens } from '@app/styles';
import { fs, openUrlInApp } from '@app/utils';

import { useStyles } from './styles';

interface Props {
	category: string;
}

export const CategoryNewsScreen: FC<Props> = ({ category }) => {
	const styles = useStyles();
	const { data: sources, isLoading } = useSourcesQuery(category);

	const renderSource = ({ item }: ListRenderItemInfo<Source>) => (
		<SourceCard
			source={item}
			containerStyle={styles.source}
			onPress={() => openUrlInApp(item.url)}
		/>
	);

	const renderEmpty = isLoading ? (
		<SkeletonSourceCard.Vertical />
	) : (
		<ListEmpty label='No sources found' fontSize={fs(24)} />
	);

	const renderHighlightsList = (
		<>
			<HighlightsList category={category} />
			<Text h4>Top sources</Text>
		</>
	);

	const getItemLayout = (_: unknown, index: number) => {
		const length = Dimens.CARD_SOURCES.height;
		const separatorLength = Dimens.SEPARATOR_ITEM;

		return {
			length,
			index,
			offset: index * length + (2 * index + 1) * separatorLength
		};
	};

	return (
		<FlatList
			data={sources}
			keyExtractor={source => source.id}
			renderItem={renderSource}
			scrollEnabled={sources && sources.length > 0}
			ListEmptyComponent={renderEmpty}
			ListHeaderComponent={renderHighlightsList}
			ItemSeparatorComponent={ListSeparator.Item}
			ListFooterComponent={ListSeparator.Edge}
			getItemLayout={getItemLayout}
		/>
	);
};
