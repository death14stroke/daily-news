import React, { FC, memo } from 'react';

import _ from 'lodash';

import { Dimens } from '@app/styles';

import SkeletonPlaceholder from './SkeletonPlaceHolder';

const SkeletonHighlights: FC = () => {
	const renderCard = (index: number) => (
		<SkeletonPlaceholder.Item
			key={index}
			{...Dimens.CARD_HIGHLIGHTS}
			borderRadius={Dimens.RADIUS_CARD}
			{...(index === 0
				? { marginEnd: Dimens.SEPARATOR_ITEM }
				: { marginHorizontal: Dimens.SEPARATOR_ITEM })}
		/>
	);

	return (
		<SkeletonPlaceholder.View>
			<SkeletonPlaceholder.Item flexDirection='row'>
				{_.times(3, renderCard)}
			</SkeletonPlaceholder.Item>
		</SkeletonPlaceholder.View>
	);
};

export default memo(SkeletonHighlights);
