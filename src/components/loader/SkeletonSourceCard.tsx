import React, { FC, memo } from 'react';

import _ from 'lodash';

import { Dimens } from '@app/styles';

import SkeletonPlaceHolder, { SkeletonPlaceholderItemProps } from './SkeletonPlaceHolder';

const renderCard = (index: number, props?: Partial<SkeletonPlaceholderItemProps>) => (
	<SkeletonPlaceHolder.Item
		key={index}
		flexDirection='row'
		height={Dimens.CARD_SOURCES.height}
		alignItems='center'
		{...props}>
		<SkeletonPlaceHolder.Item
			width={Dimens.AVATAR_MEDIUM}
			height={Dimens.AVATAR_MEDIUM}
			borderRadius={Dimens.AVATAR_MEDIUM}
		/>
		<SkeletonPlaceHolder.Item
			height={'100%'}
			flex={1}
			borderRadius={Dimens.RADIUS_CARD}
			overflow='hidden'
			marginStart={Dimens.PADDING_CONTENT}>
			<SkeletonPlaceHolder.Item
				height={24}
				borderRadius={Dimens.RADIUS_CARD}
				marginBottom={Dimens.SEPARATOR_ITEM}
			/>
			<SkeletonPlaceHolder.Item height={'100%'} borderRadius={Dimens.RADIUS_CARD} />
		</SkeletonPlaceHolder.Item>
	</SkeletonPlaceHolder.Item>
);

const Vertical: FC = () => {
	return (
		<SkeletonPlaceHolder.View>
			<SkeletonPlaceHolder.Item marginHorizontal={Dimens.PADDING_SCREEN}>
				{_.times(5, index =>
					renderCard(
						index,
						index === 0
							? { marginBottom: Dimens.SEPARATOR_ITEM }
							: { marginVertical: Dimens.SEPARATOR_ITEM }
					)
				)}
			</SkeletonPlaceHolder.Item>
		</SkeletonPlaceHolder.View>
	);
};

const Horizontal: FC = () => {
	return (
		<SkeletonPlaceHolder.View>
			<SkeletonPlaceHolder.Item flexDirection='row'>
				{_.times(5, index =>
					renderCard(index, {
						...Dimens.CARD_SOURCES,
						...(index === 0
							? { marginEnd: Dimens.SEPARATOR_ITEM }
							: { marginHorizontal: Dimens.SEPARATOR_ITEM })
					})
				)}
			</SkeletonPlaceHolder.Item>
		</SkeletonPlaceHolder.View>
	);
};

export default {
	Vertical: memo(Vertical),
	Horizontal: memo(Horizontal)
};
