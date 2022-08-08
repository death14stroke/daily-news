import React from 'react';
import { ViewStyle } from 'react-native';

import { withTheme } from '@rneui/themed';
import NativeSkeletonPlaceholder from 'react-native-skeleton-placeholder';

export type SkeletonPlaceholderProps = {
	children: JSX.Element | JSX.Element[];
	backgroundColor?: string;
	highlightColor?: string;
	speed?: number;
	direction?: 'left' | 'right';
};

export interface SkeletonPlaceholderItemProps extends ViewStyle {
	children?: JSX.Element | JSX.Element[];
}

const PlaceHolder = withTheme<SkeletonPlaceholderProps>(
	({ children, ...props }) => (
		<NativeSkeletonPlaceholder {...props}>{children}</NativeSkeletonPlaceholder>
	),
	'SkeletonPlaceHolder'
);

export default {
	View: PlaceHolder,
	Item: NativeSkeletonPlaceholder.Item
};
