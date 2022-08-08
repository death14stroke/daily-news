import React, { FC, memo } from 'react';

import _ from 'lodash';

import { Dimens } from '@app/styles';

import SkeletonPlaceholder from './SkeletonPlaceHolder';
import SkeletonPlaceHolder from './SkeletonPlaceHolder';

const SkeletonNewsCard: FC = () => {
	const renderCard = (index: number) => (
		<SkeletonPlaceholder.Item
			key={index}
			flexDirection='row'
			height={Dimens.CARD_RECENTS.height}
			{...(index === 0
				? { marginBottom: Dimens.SEPARATOR_ITEM }
				: { marginVertical: Dimens.SEPARATOR_ITEM })}>
			<SkeletonPlaceholder.Item
				height='100%'
				aspectRatio={1}
				borderRadius={Dimens.RADIUS_CARD}
			/>
			<SkeletonPlaceholder.Item
				flex={1}
				marginStart={Dimens.PADDING_CONTENT}
				borderRadius={Dimens.RADIUS_CARD}
				overflow='hidden'>
				<SkeletonPlaceholder.Item height={32} borderRadius={Dimens.RADIUS_CARD} />
				<SkeletonPlaceholder.Item
					height='100%'
					borderRadius={Dimens.RADIUS_CARD}
					marginTop={Dimens.PADDING_CONTENT}
				/>
			</SkeletonPlaceholder.Item>
		</SkeletonPlaceholder.Item>
	);

	return (
		<SkeletonPlaceholder.View>
			<SkeletonPlaceHolder.Item marginHorizontal={Dimens.PADDING_SCREEN}>
				{_.times(7, renderCard)}
			</SkeletonPlaceHolder.Item>
		</SkeletonPlaceholder.View>
	);
};

export default memo(SkeletonNewsCard);
