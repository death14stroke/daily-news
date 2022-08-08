import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Text } from '@rneui/themed';

import { SourceCard } from '@app/components/listitem';
import { ListEmpty, ListSeparator, SkeletonSourceCard } from '@app/components/loader';
import { CATEGORIES } from '@app/data';
import { useMultipleSourceQueries } from '@app/hooks/source';
import { Source } from '@app/models';
import { Dimens } from '@app/styles';
import { openUrlInApp } from '@app/utils';

import { useStyles } from './styles';

export const DiscoverScreen: FC = () => {
	const styles = useStyles();
	const results = useMultipleSourceQueries();

	const renderSource = ({ item }: ListRenderItemInfo<Source>) => (
		<SourceCard
			source={item}
			containerStyle={styles.source}
			onPress={() => openUrlInApp(item.url)}
		/>
	);

	const renderCategorySources = ({ item, index }: ListRenderItemInfo<string>) => {
		const { data, isLoading } = results[index];

		const renderEmpty = isLoading ? (
			<SkeletonSourceCard.Horizontal />
		) : (
			<ListEmpty label='No sources found' containerStyle={styles.empty} />
		);

		const getItemLayout = (_: unknown, index: number) => {
			const length = Dimens.CARD_SOURCES.width;
			const separatorLength = Dimens.SEPARATOR_ITEM;

			return {
				length,
				index,
				offset: index * length + (2 * index + 1) * separatorLength
			};
		};

		return (
			<>
				<Text h4>Top sources in {item}</Text>
				<FlatList
					data={data}
					renderItem={renderSource}
					keyExtractor={source => source.name}
					horizontal
					contentContainerStyle={styles.categorySourceList}
					showsHorizontalScrollIndicator={false}
					ListHeaderComponent={ListSeparator.Edge}
					ListEmptyComponent={renderEmpty}
					ListFooterComponent={ListSeparator.Edge}
					ItemSeparatorComponent={ListSeparator.Item}
					getItemLayout={getItemLayout}
				/>
			</>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderCategorySources}
			keyExtractor={category => category}
		/>
	);
};
