import React from 'react';
import { TouchableOpacity } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';

import { Dimens } from '@app/styles';

import { RootStackParamList } from './paramsList';

export const HomeScreenMenu = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Search')}
			style={{ marginEnd: Dimens.PADDING_SCREEN }}>
			<Icon type='ionicon' name='search' size={24} />
		</TouchableOpacity>
	);
};

export const transparentHeaderOptions: NativeStackNavigationOptions = {
	headerShown: true,
	headerTransparent: true,
	headerTitle: '',
	headerTintColor: 'white',
	headerBackTitleVisible: false
};
