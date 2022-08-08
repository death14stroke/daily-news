import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { Dimens } from '@app/styles';

const Item: FC = () => <View style={{ margin: Dimens.SEPARATOR_ITEM }} />;

const Edge: FC = () => <View style={{ margin: Dimens.PADDING_SCREEN / 2 }} />;

export const ListSeparator = {
	Item: memo(Item),
	Edge: memo(Edge)
};
